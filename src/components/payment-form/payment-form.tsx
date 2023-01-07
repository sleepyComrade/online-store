import React, { useState } from "react";
import { CreditCard } from "./credit-card";
import { PersonalData } from "./personal-data";
import { IPersonalData, IPersonalDataValidity, ICardData, ICardDataValidity } from "../../interfaces";

export function PaymentForm(props: {setState: React.Dispatch<React.SetStateAction<boolean>>}) {
  const fieldsetState = {
    initial: "credit-card__fieldset",
    incorrect: "credit-card__fieldset credit-card__fieldset_incorrect",
    correct: "credit-card__fieldset credit-card__fieldset_correct",
  };

  const [personalData, setPersonalData] = useState({name: '', phone: '', address: '', email: ''});
  const [personalIsCorrect, setPersonalCorrect] = useState({nameIsCorrect: false, phoneIsCorrect: false, addressIsCorrect: false, emailIsCorrect: false});
  const [cardData, setCardData] = useState({holder: '', number: '', date: '', cvv: ''});
  const [cardIsCorrect, setCardCorrect] = useState({holderIsCorrect: false, numberIsCorrect: false, dateIsCorrect: false, cvvIsCorrect: false});

  const [cardErrorData, setCardErrorData] = useState({holder: '', number: '', date: '', cvv: ''});
  const [cardStates, setCardStates] = useState({holder: fieldsetState.initial, number: fieldsetState.initial, date: fieldsetState.initial, cvv: fieldsetState.initial});

  const cardRegexes = {
    holder: /^((\b[A-Z]{3,40}\b)\s*){2,}$/,
    number: /^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/,
    date: /^((0[1-9])|(1[0-2]))\/\d{2}$/,
    cvv:/^\d{3}$/
  }

  const inputNames = ['Holder', 'Number', 'Date', 'CVV'];

  const setByValueName = (valueName: string,
                         data: ICardData,
                         setData: (value: React.SetStateAction<ICardData>) => void,
                         value: string) => {
    if (valueName === 'holder') {
      setData({...data, holder: value});
    }
    if (valueName === 'number') {
      setData({...data, number: value});
    }
    if (valueName === 'date') {
      setData({...data, date: value});
    }
    if (valueName === 'cvv') {
      setData({...data, cvv: value});
    }
  }

  const setStates = (
    name: string,
    regex: RegExp,
    valueName: string,
    inputNameIndex: number
  ) => {
    if (regex.test(name.trim())) {
      setByValueName(valueName, cardErrorData, setCardErrorData, '');
      setByValueName(valueName, cardStates, setCardStates, fieldsetState.correct);
    } else if (name.trim() === "") {
      setByValueName(valueName, cardErrorData, setCardErrorData, `${inputNames[inputNameIndex]} field must be filled`);
      setByValueName(valueName, cardStates, setCardStates, fieldsetState.incorrect);
    } else {
      setByValueName(valueName, cardErrorData, setCardErrorData, `${inputNames[inputNameIndex]} field is incorrect`);
      setByValueName(valueName, cardStates, setCardStates, fieldsetState.incorrect);
    }
  };

  const setStatesOnSubmit = (
    name: string,
    regex: RegExp,
    valueName: string,
    inputNameIndex: number,
    arrData: string[],
    stateDate: string[]
  ) => {
    if (regex.test(name.trim())) {
      setByValueName(valueName, cardErrorData, setCardErrorData, '');
      setByValueName(valueName, cardStates, setCardStates, fieldsetState.correct);
      arrData.push('');
      stateDate.push(fieldsetState.correct);
    } else if (name.trim() === "") {
      setByValueName(valueName, cardErrorData, setCardErrorData, `${inputNames[inputNameIndex]} field must be filled`);
      setByValueName(valueName, cardStates, setCardStates, fieldsetState.incorrect);
      arrData.push(`${inputNames[inputNameIndex]} field must be filled`);
      stateDate.push(fieldsetState.incorrect);
    } else {
      setByValueName(valueName, cardErrorData, setCardErrorData, `${inputNames[inputNameIndex]} field is incorrect`);
      setByValueName(valueName, cardStates, setCardStates, fieldsetState.incorrect);
      arrData.push(`${inputNames[inputNameIndex]} field is incorrect`);
      stateDate.push(fieldsetState.incorrect);
    }
  };

  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    let isValid = true;
    const personalValues = Object.values(personalIsCorrect);
    const cardValues = Object.values(cardIsCorrect);
    const values = [...personalValues, ...cardValues];

    const cardErrData: string[] = [];
    const cardStateData: string[] = [];

    setStatesOnSubmit(cardData.holder, cardRegexes.holder, 'holder', 0, cardErrData, cardStateData);
    setStatesOnSubmit(cardData.number, cardRegexes.number, 'number', 1, cardErrData, cardStateData);
    setStatesOnSubmit(cardData.date, cardRegexes.date, 'date', 2, cardErrData, cardStateData);
    setStatesOnSubmit(cardData.cvv, cardRegexes.cvv, 'cvv', 3, cardErrData, cardStateData);

    setCardErrorData({holder: cardErrData[0], number: cardErrData[1], date: cardErrData[2], cvv: cardErrData[3]});
    setCardStates({holder: cardStateData[0], number: cardStateData[1], date: cardStateData[2], cvv: cardStateData[3]});

    values.forEach(value => {
      if (!value) {
        isValid = false;
      }
    })
    if (isValid) {
      props.setState(false);
    }
  };

  return (
    <div>
      <form className="payment-form">
        <PersonalData initial={personalData} correctInit={personalIsCorrect} onChange={(data: IPersonalData, personalIsCorrect: IPersonalDataValidity) => {
          setPersonalCorrect(personalIsCorrect);
          setPersonalData(data);
        }}/>
        <CreditCard onErrorChange={(valueName: string) => {
          setByValueName(valueName, cardErrorData, setCardErrorData, '');
        }} onStateChange={(valueName: string) => {
          setByValueName(valueName, cardStates, setCardStates, fieldsetState.initial);
        }} onBlur={(value: string, regex: RegExp, valueName: string, index: number) => {
            setStates(value, regex, valueName, index);
        }} cardStates={cardStates} fieldsetState={fieldsetState} regexes={cardRegexes} cardErrorData={cardErrorData} initial={cardData} correctInit={cardIsCorrect} onChange={(data: ICardData, cardIsCorrect: ICardDataValidity) => {
          setCardCorrect(cardIsCorrect);
          setCardData(data);
        }} />
        <button onClick={submitForm} onMouseDown={submitForm}>Confirm</button>
      </form>
    </div>
  );
}
