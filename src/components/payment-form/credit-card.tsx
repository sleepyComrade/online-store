import React, { useState } from "react";
import defaultCard from "../../assets/images/credit-card.png";
import visa from "../../assets/svg/visa.svg";
import masterCard from "../../assets/svg/mastercard.svg";
import americanExpress from "../../assets/svg/american-express.svg";

export function CreditCard() {
  const fieldsetState = {
    initial: "credit-card__fieldset",
    incorrect: "credit-card__fieldset credit-card__fieldset_incorrect",
    correct: "credit-card__fieldset credit-card__fieldset_correct",
  };

  const inputNames = ['Holder', 'Number', 'Date', 'CVV'];
  const systems = [defaultCard, visa, masterCard, americanExpress];

  const [system, setSystem] = useState(systems[0]);

  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [holderIsCorrect, setHolderIsCorrect] = useState(false);
  const [numberIsCorrect, setNumberIsCorrect] = useState(false);
  const [dateIsCorrect, setDateIsCorrect] = useState(false);
  const [cvvIsCorrect, setCvvIsCorrect] = useState(false);

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
    setCorrectness: React.Dispatch<React.SetStateAction<boolean>>,
    inputNameIndex: number
  ) => {
    if (regex.test(name.trim())) {
      setErr("");
      setState(fieldsetState.correct);
      setCorrectness(true);
    } else {
      setErr("Incorrect");
      setState(fieldsetState.incorrect);
      setCorrectness(false);
    }
    if (name.trim() === "") {
      setErr(`${inputNames[inputNameIndex]} field must be filled`);
      setState(fieldsetState.incorrect);
      setCorrectness(false);
    }
  };

  const holderBlurHandler = () => {
    const regex = /^((\b[A-Z]{3,40}\b)\s*){2,}$/;
    setStates(holder, regex, setHolderError, setHolderState, setHolderIsCorrect, 0);
  };

  const numberBlurHandler = () => {
    const regex = /^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/;
    setStates(number, regex, setNumberError, setNumberState, setNumberIsCorrect, 1);
  };

  const dateBlurHandler = () => {
    const regex = /^((0[1-9])|(1[0-2]))\/\d{2}$/;
    setStates(date, regex, setDateError, setDateState, setDateIsCorrect, 2);
  };

  const cvvBlurHandler = () => {
    const regex = /^\d{3}$/;
    setStates(cvv, regex, setCvvError, setCvvState, setCvvIsCorrect, 3);
  };

  const holderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHolder(e.target.value.toUpperCase());
    setHolderError('');
    setHolderState(fieldsetState.initial);
  };

  const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let resValue = e.target.value;
    if (resValue.length > 19) {
      resValue = number;
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
    setNumber(resValue);
    setNumberError('');
    setNumberState(fieldsetState.initial);
  };

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDirection = e.target.value.length - date.length >= 0 ? 1 : 0;
    let resValue = e.target.value;
    if (date.length === 0 && inputDirection) {
      resValue = e.target.value.replace(/\D/g, '');
    }
    if (date.length === 1 && inputDirection) {
      const checkedVal = e.target.value.replace(/\D/g, '');
      resValue = checkedVal.length === 2 ? checkedVal + '/' : checkedVal;
    }
    if (date.length === 3 && inputDirection && date === e.target.value.slice(0, 3)) {
      resValue = e.target.value.replace(/\D{1}$/g, '');
    } else if (date.length === 3 && inputDirection && date !== e.target.value.slice(0, 3)) {
      resValue = date;
    }
    if (date.length === 4 && inputDirection && date === e.target.value.slice(0, 4)) {
      resValue = e.target.value.replace(/\D{1}$/g, '');
    } else if (date.length === 4 && inputDirection && date !== e.target.value.slice(0, 4)) {
      resValue = date;
    }
    if (date.length === 5 && inputDirection ||
        date.length === 5 && !inputDirection && e.target.value !== date.slice(0, 4) ||
        date.length === 4 && !inputDirection && e.target.value !== date.slice(0, 3)) {
      resValue = date;
    }
    if (date.length === 3 && !inputDirection && e.target.value === date.slice(0, 2)) {
      resValue = date.slice(0, 1);
    } else if (date.length === 3 && !inputDirection && e.target.value !== date.slice(0, 2)) {
      resValue = date;
    }
    if (e.target.value.length === 0 && !inputDirection) {
      resValue = '';
    }
    setDate(resValue);
    setDateError('');
    setDateState(fieldsetState.initial);
  };

  const cvvChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const resValue = value.length < 4 ? value : value.slice(0, 3);
    setCvv(resValue);
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
            <input onBlur={holderBlurHandler} onChange={holderChangeHandler} value={holder} className="credit-card__input" type="text" placeholder="John Smith" />
          </fieldset>
          {(holderError) && <p className="credit-card__error">{holderError}</p>}
        </div>
        <div className="credit-card__fieldset_line">
          <fieldset className={numberState}>
            <legend className="credit-card__legend">&nbsp;Card Number&nbsp;</legend>
            <input onBlur={numberBlurHandler} onChange={numberChangeHandler} value={number} className="credit-card__input" type="text" placeholder="0000 0000 0000 0000" />
            <div className="credit-card__icon" style={{backgroundImage: `url(${system})`}}></div>
          </fieldset>
          {(numberError) && <p className="credit-card__error">{numberError}</p>}
        </div>
        <div>
          <div className="credit-card__fieldset_small-wrap">
            <fieldset className={dateState}>
              <legend className="credit-card__legend">&nbsp;Expiration Date&nbsp;</legend>
              <input onBlur={dateBlurHandler} onChange={dateChangeHandler} value={date} className="credit-card__input credit-card__input_small" type="text" placeholder="00/00" />
            </fieldset>
            <fieldset className={cvvState}>
              <legend className="credit-card__legend">&nbsp;CVV&nbsp;</legend>
              <input onBlur={cvvBlurHandler} onChange={cvvChangeHandler} value={cvv} className="credit-card__input credit-card__input_small" type="text" placeholder="•••" />
            </fieldset>
          </div>
          {(dateError) && <p className="credit-card__error">{dateError}</p>}
          {(cvvError) && <p className="credit-card__error">{cvvError}</p>}
        </div>
      </div>
    </div>
  );
}
