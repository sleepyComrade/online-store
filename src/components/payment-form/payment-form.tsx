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

  const inputState = {
    initial: "payment-form__input",
    incorrect: "payment-form__input payment-form__input_incorrect",
    correct: "payment-form__input payment-form__input_correct",
  };

  const inputMessageState = {
    initial: "payment-form__help-msg",
    incorrect: "payment-form__help-msg payment-form__help-msg-incorrect",
    correct: "payment-form__help-msg payment-form__help-msg-correct",
  }

  const [personalData, setPersonalData] = useState({name: '', phone: '', address: '', email: ''});
  const [personalIsCorrect, setPersonalCorrect] = useState({nameIsCorrect: false, phoneIsCorrect: false, addressIsCorrect: false, emailIsCorrect: false});
  const [cardData, setCardData] = useState({holder: '', number: '', date: '', cvv: ''});
  const [cardIsCorrect, setCardCorrect] = useState({holderIsCorrect: false, numberIsCorrect: false, dateIsCorrect: false, cvvIsCorrect: false});

  const [cardErrorData, setCardErrorData] = useState({holder: '', number: '', date: '', cvv: ''});
  const [cardStates, setCardStates] = useState({holder: fieldsetState.initial, number: fieldsetState.initial, date: fieldsetState.initial, cvv: fieldsetState.initial});

  const [helpMessages, setHelpMessage] = useState({name: 'Enter your name', phone: 'Enter your phone number', address: 'Enter your address', email: 'Enter your email'});
  const [personalStates, setPersonalStates] = useState({name: inputState.initial, phone: inputState.initial, address: inputState.initial, email: inputState.initial});
  const [messageStates, setMessageStates] = useState({name: inputMessageState.initial, phone: inputMessageState.initial, address: inputMessageState.initial, email: inputMessageState.initial});

  // Personal Data consts

  const personalRegexes = {
    name: /^((\b[A-Z]{1}[a-zA-Z]{2,40}\b)\s*){2,}$/,
    phone: /^\+\d{9,}$/,
    address: /^((\b[a-zA-Z0-9]{5,40}\b)\s*){3,}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }

  const inputPersonalNames = ['Name', 'Phone number', 'Address', 'Email'];

  const setPersonalByValueName = (valueName: string,
                         data: IPersonalData,
                         setData: (value: React.SetStateAction<IPersonalData>) => void,
                         value: string) => {
    if (valueName === 'name') {
    setData({...data, name: value});
    }
    if (valueName === 'phone') {
    setData({...data, phone: value});
    }
    if (valueName === 'address') {
    setData({...data, address: value});
    }
    if (valueName === 'email') {
    setData({...data, email: value});
    }
  }

  const setPersonalDataStates = (
    name: string,
    regex: RegExp,
    valueName: string,
    index: number
  ) => {
    if (regex.test(name.trim())) {
      setPersonalByValueName(valueName, helpMessages, setHelpMessage, 'Correct');
      setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.correct);
      setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.correct);
    } else if (name.trim() === "") {
      setPersonalByValueName(valueName, helpMessages, setHelpMessage, `${inputPersonalNames[index]} field must be filled`);
      setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.incorrect);
      setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.incorrect);
    } else {
      setPersonalByValueName(valueName, helpMessages, setHelpMessage, `${inputPersonalNames[index]} field is incorrect`);
      setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.incorrect);
      setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.incorrect);
    }
  };

  const setPersonalStatesOnSubmit = (
    name: string,
    regex: RegExp,
    valueName: string,
    index: number,
    personalMessageData: string[],
    personaStateData: string[],
    messageStateData: string[]
  ) => {
    if (regex.test(name.trim())) {
      setPersonalByValueName(valueName, helpMessages, setHelpMessage, 'Correct');
      setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.correct);
      setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.correct);
      personalMessageData.push('Correct');
      personaStateData.push(inputState.correct);
      messageStateData.push(inputMessageState.correct);
    } else if (name.trim() === "") {
      setPersonalByValueName(valueName, helpMessages, setHelpMessage, `${inputPersonalNames[index]} field must be filled`);
      setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.incorrect);
      setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.incorrect);
      personalMessageData.push(`${inputPersonalNames[index]} field must be filled`);
      personaStateData.push(inputState.incorrect);
      messageStateData.push(inputMessageState.incorrect);
    } else {
      setPersonalByValueName(valueName, helpMessages, setHelpMessage, `${inputPersonalNames[index]} field is incorrect`);
      setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.incorrect);
      setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.incorrect);
      personalMessageData.push(`${inputPersonalNames[index]} field is incorrect`);
      personaStateData.push(inputState.incorrect);
      messageStateData.push(inputMessageState.incorrect);
    }
  };

  // Credit Card consts

  const cardRegexes = {
    holder: /^((\b[A-Z]{3,40}\b)\s*){2,}$/,
    number: /^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/,
    date: /^((0[1-9])|(1[0-2]))\/\d{2}$/,
    cvv: /^\d{3}$/
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

    const personalMessageData: string[] = [];
    const personaStateData: string[] = [];
    const messageStateData: string[] = [];

    setPersonalStatesOnSubmit(personalData.name, personalRegexes.name, 'name', 0, personalMessageData, personaStateData, messageStateData);
    setPersonalStatesOnSubmit(personalData.phone, personalRegexes.phone, 'phone', 1, personalMessageData, personaStateData, messageStateData);
    setPersonalStatesOnSubmit(personalData.address, personalRegexes.address, 'address', 2, personalMessageData, personaStateData, messageStateData);
    setPersonalStatesOnSubmit(personalData.email, personalRegexes.email, 'email', 3, personalMessageData, personaStateData, messageStateData);

    setHelpMessage({name: personalMessageData[0], phone: personalMessageData[1], address: personalMessageData[2], email: personalMessageData[3]});
    setPersonalStates({name: personaStateData[0], phone: personaStateData[1], address: personaStateData[2], email: personaStateData[3]});
    setMessageStates({name: messageStateData[0], phone: messageStateData[1], address: messageStateData[2], email: messageStateData[3]});

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
        <PersonalData onBlur={(value: string, regex: RegExp, valueName: string, index: number) => {
          setPersonalDataStates(value, regex, valueName, index);
        }} onStateChange={(valueName: string) => {
          setPersonalByValueName(valueName, personalStates, setPersonalStates, inputState.initial);
          setPersonalByValueName(valueName, messageStates, setMessageStates, inputMessageState.initial);
        }} onMessageChange={(valueName: string, index: number) => {
          setPersonalByValueName(valueName, helpMessages, setHelpMessage, `Enter your ${inputPersonalNames[index].toLowerCase()}`);
        }} personalStates={personalStates}
        messageStates={messageStates}
        helpMessages={helpMessages}
        initial={personalData}
        correctInit={personalIsCorrect}
        onChange={(data: IPersonalData, personalIsCorrect: IPersonalDataValidity) => {
          setPersonalCorrect(personalIsCorrect);
          setPersonalData(data);
        }} regexes={personalRegexes} />
        <CreditCard onErrorChange={(valueName: string) => {
          setByValueName(valueName, cardErrorData, setCardErrorData, '');
        }} onStateChange={(valueName: string) => {
          setByValueName(valueName, cardStates, setCardStates, fieldsetState.initial);
        }} onBlur={(value: string, regex: RegExp, valueName: string, index: number) => {
            setStates(value, regex, valueName, index);
        }} cardStates={cardStates}
        regexes={cardRegexes}
        cardErrorData={cardErrorData}
        initial={cardData}
        correctInit={cardIsCorrect}
        onChange={(data: ICardData, cardIsCorrect: ICardDataValidity) => {
          setCardCorrect(cardIsCorrect);
          setCardData(data);
        }} />
        <button onClick={submitForm} onMouseDown={submitForm}>Confirm</button>
      </form>
    </div>
  );
}
