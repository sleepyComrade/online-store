import React, { useState } from "react";
import defaultCard from "../../assets/images/credit-card.png";
import visa from "../../assets/svg/visa.svg";
import masterCard from "../../assets/svg/mastercard.svg";
import americanExpress from "../../assets/svg/american-express.svg";
import { ICardData, ICardDataValidity } from "../../interfaces";

export function CreditCard(props: {onChange: (data: ICardData, personalIsCorrect: ICardDataValidity) => void, initial: ICardData, correctInit: ICardDataValidity}) {
  const fieldsetState = {
    initial: "credit-card__fieldset",
    incorrect: "credit-card__fieldset credit-card__fieldset_incorrect",
    correct: "credit-card__fieldset credit-card__fieldset_correct",
  };

  const regexes = {
    holder: /^((\b[A-Z]{3,40}\b)\s*){2,}$/,
    number: /^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/,
    date: /^((0[1-9])|(1[0-2]))\/\d{2}$/,
    cvv:/^\d{3}$/
  }

  const data = {...props.initial};
  const cardIsCorrect = {...props.correctInit};

  const inputNames = ['Holder', 'Number', 'Date', 'CVV'];
  const systems = [defaultCard, visa, masterCard, americanExpress];

  const [system, setSystem] = useState(systems[0]);

  const [holderState, setHolderState] = useState(fieldsetState.initial);
  const [numberState, setNumberState] = useState(fieldsetState.initial);
  const [dateState, setDateState] = useState(fieldsetState.initial);
  const [cvvState, setCvvState] = useState(fieldsetState.initial);

  const [holderError, setHolderError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const setStates = (
    name: string,
    regex: RegExp,
    setErr: React.Dispatch<React.SetStateAction<string>>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    inputNameIndex: number
  ) => {
    if (regex.test(name.trim())) {
      setErr("");
      setState(fieldsetState.correct);
    } else {
      setErr("Incorrect");
      setState(fieldsetState.incorrect);
    }
    if (name.trim() === "") {
      setErr(`${inputNames[inputNameIndex]} field must be filled`);
      setState(fieldsetState.incorrect);
    }
  };
  
  const holderBlurHandler = () => setStates(data.holder, regexes.holder, setHolderError, setHolderState, 0);
  const numberBlurHandler = () => setStates(data.number, regexes.number, setNumberError, setNumberState, 1);
  const dateBlurHandler = () => setStates(data.date, regexes.date, setDateError, setDateState, 2);
  const cvvBlurHandler = () => setStates(data.cvv, regexes.cvv, setCvvError, setCvvState, 3);

  const holderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resValue = e.target.value.toUpperCase();
    cardIsCorrect.holderIsCorrect = regexes.holder.test(resValue.trim());
    data.holder = resValue;
    props.onChange(data, cardIsCorrect);
    setHolderError('');
    setHolderState(fieldsetState.initial);
  };

  const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let resValue = e.target.value;
    if (resValue.length > 19) {
      resValue = data.number;
    } else {
      const numbers = e.target.value.split(' ').join('');
      const value = numbers.replace(/\D/g, '');
      const length = Math.ceil(value.length / 4);
      const resArr = [];
      for (let i = 0; i < length; i++) {
        resArr.push(value.slice(i * 4, (i * 4) + 4))
      }
      resValue = resArr.join(' ');
      switch (resValue[0]) {
        case '4':
          setSystem(systems[1]);
          break;
        case '5':
          setSystem(systems[2]);
          break;
        case '6':
          setSystem(systems[3]);
          break;
        default:
          setSystem(systems[0]);
          break;
      }
    }
    cardIsCorrect.numberIsCorrect = regexes.number.test(resValue.trim());
    data.number = resValue;
    props.onChange(data, cardIsCorrect);
    setNumberError('');
    setNumberState(fieldsetState.initial);
  };

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDirection = e.target.value.length - data.date.length >= 0 ? 1 : 0;
    let resValue = e.target.value;
    if (data.date.length === 0 && inputDirection) {
      resValue = e.target.value.replace(/\D/g, '');
    }
    if (data.date.length === 1 && inputDirection) {
      const checkedVal = e.target.value.replace(/\D/g, '');
      resValue = checkedVal.length === 2 ? checkedVal + '/' : checkedVal;
    }
    if (data.date.length === 3 && inputDirection && data.date === e.target.value.slice(0, 3)) {
      resValue = e.target.value.replace(/\D{1}$/g, '');
    } else if (data.date.length === 3 && inputDirection && data.date !== e.target.value.slice(0, 3)) {
      resValue = data.date;
    }
    if (data.date.length === 4 && inputDirection && data.date === e.target.value.slice(0, 4)) {
      resValue = e.target.value.replace(/\D{1}$/g, '');
    } else if (data.date.length === 4 && inputDirection && data.date !== e.target.value.slice(0, 4)) {
      resValue = data.date;
    }
    if (data.date.length === 5 && inputDirection ||
        data.date.length === 5 && !inputDirection && e.target.value !== data.date.slice(0, 4) ||
        data.date.length === 4 && !inputDirection && e.target.value !== data.date.slice(0, 3)) {
      resValue = data.date;
    }
    if (data.date.length === 3 && !inputDirection && e.target.value === data.date.slice(0, 2)) {
      resValue = data.date.slice(0, 1);
    } else if (data.date.length === 3 && !inputDirection && e.target.value !== data.date.slice(0, 2)) {
      resValue = data.date;
    }
    if (e.target.value.length === 0 && !inputDirection) {
      resValue = '';
    }
    cardIsCorrect.dateIsCorrect = regexes.date.test(resValue.trim());
    data.date = resValue;
    props.onChange(data, cardIsCorrect);
    setDateError('');
    setDateState(fieldsetState.initial);
  };

  const cvvChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const resValue = value.length < 4 ? value : value.slice(0, 3);
    cardIsCorrect.cvvIsCorrect = regexes.cvv.test(resValue.trim());
    data.cvv = resValue;
    props.onChange(data, cardIsCorrect);
    setCvvError('');
    setCvvState(fieldsetState.initial);
  };

  return (
    <div>
      <h3 className="payment-form__block-name">Credit Card details</h3>
      <div className="credit-card">
        <div className="credit-card__fieldset_line">
          <fieldset className={holderState}>
            <legend className="credit-card__legend">&nbsp;Card Holder&nbsp;</legend>
            <input onBlur={holderBlurHandler} onChange={holderChangeHandler} value={data.holder} className="credit-card__input" type="text" placeholder="John Smith" />
          </fieldset>
          {(holderError) && <p className="credit-card__error">{holderError}</p>}
        </div>
        <div className="credit-card__fieldset_line">
          <fieldset className={numberState}>
            <legend className="credit-card__legend">&nbsp;Card Number&nbsp;</legend>
            <input onBlur={numberBlurHandler} onChange={numberChangeHandler} value={data.number} className="credit-card__input" type="text" placeholder="0000 0000 0000 0000" />
            <div className="credit-card__icon" style={{backgroundImage: `url(${system})`}}></div>
          </fieldset>
          {(numberError) && <p className="credit-card__error">{numberError}</p>}
        </div>
        <div>
          <div className="credit-card__fieldset_small-wrap">
            <fieldset className={dateState}>
              <legend className="credit-card__legend">&nbsp;Expiration Date&nbsp;</legend>
              <input onBlur={dateBlurHandler} onChange={dateChangeHandler} value={data.date} className="credit-card__input credit-card__input_small" type="text" placeholder="00/00" />
            </fieldset>
            <fieldset className={cvvState}>
              <legend className="credit-card__legend">&nbsp;CVV&nbsp;</legend>
              <input onBlur={cvvBlurHandler} onChange={cvvChangeHandler} value={data.cvv} className="credit-card__input credit-card__input_small" type="text" placeholder="•••" />
            </fieldset>
          </div>
          {(dateError) && <p className="credit-card__error">{dateError}</p>}
          {(cvvError) && <p className="credit-card__error">{cvvError}</p>}
        </div>
      </div>
    </div>
  );
}
