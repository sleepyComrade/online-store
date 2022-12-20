import React, { useState } from "react";
import { IPersonalData, IPersonalDataValidity } from "../../interfaces";

export function PersonalData(props: {onChange: (data: IPersonalData, personalIsCorrect: IPersonalDataValidity) => void, initial: IPersonalData, correctInit: IPersonalDataValidity}) {
  const inputState = {
    initial: "payment-form__input",
    incorrect: "payment-form__input payment-form__input_incorrect",
    correct: "payment-form__input payment-form__input_correct",
  };

  const regexes = {
    name: /^((\b[A-Z]{1}[a-zA-Z]{2,40}\b)\s*){2,}$/,
    phone: /^\+\d{9,}$/,
    address: /^((\b[a-zA-Z0-9]{5,40}\b)\s*){3,}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }

  const data = {...props.initial};
  const personalIsCorrect = {...props.correctInit};

  const [nameState, setNameState] = useState(inputState.initial);
  const [phoneState, setPhoneState] = useState(inputState.initial);
  const [addressState, setAddressState] = useState(inputState.initial);
  const [emailState, setEmailState] = useState(inputState.initial);

  const [nameHelpMessage, setNameHelpMessage] = useState("Enter your name");
  const [phoneHelpMessage, setPhoneHelpMessage] = useState("Enter your phone number");
  const [addressHelpMessage, setAddressHelpMessage] = useState("Enter your address");
  const [emailHelpMessage, setEmailHelpMessage] = useState("Enter your email");

  const setStates = (
    name: string,
    regex: RegExp,
    setMsg: React.Dispatch<React.SetStateAction<string>>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (regex.test(name.trim())) {
      setMsg("Correct");
      setState(inputState.correct);
    } else {
      setMsg("Incorrect");
      setState(inputState.incorrect);
    }
    if (name.trim() === "") {
      setMsg("Empty");
      setState(inputState.incorrect);
    }
  };

  const nameBlurHandler = () => {
    setStates(data.name, regexes.name, setNameHelpMessage, setNameState);
  };

  const phoneBlurHandler = () => {
    setStates(data.phone, regexes.phone, setPhoneHelpMessage, setPhoneState);
  };

  const addressBlurHandler = () => {
    setStates(data.address, regexes.address, setAddressHelpMessage, setAddressState);
  };

  const emailBlurHandler = () => {
    setStates(data.email, regexes.email, setEmailHelpMessage, setEmailState);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.nameIsCorrect = regexes.name.test(e.target.value.trim());
    data.name = e.target.value;
    props.onChange(data, personalIsCorrect);
    setNameHelpMessage("Enter your name");
    setNameState(inputState.initial);
  };

  const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.phoneIsCorrect = regexes.phone.test(e.target.value.trim());
    data.phone = e.target.value;
    props.onChange(data, personalIsCorrect);
    setPhoneHelpMessage("Enter your phone number");
    setPhoneState(inputState.initial);
  };

  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.addressIsCorrect = regexes.address.test(e.target.value.trim());
    data.address = e.target.value;
    props.onChange(data, personalIsCorrect);
    setAddressHelpMessage("Enter your address");
    setAddressState(inputState.initial);
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.emailIsCorrect = regexes.email.test(e.target.value.trim());
    data.email = e.target.value;
    props.onChange(data, personalIsCorrect);
    setEmailHelpMessage("Enter your email");
    setEmailState(inputState.initial);
  };
  
  return (
    <div>
        <h3 className="payment-form__block-name">Personal details</h3>
        <div className="payment-form__input-wrap">
          <input
            onChange={nameChangeHandler}
            value={data.name}
            onBlur={nameBlurHandler}
            className={nameState}
            type="text"
            placeholder="Name"
          />
          <p className="payment-form__help-msg">{nameHelpMessage}</p>
        </div>
        <div className="payment-form__input-wrap">
          <input
            onChange={phoneChangeHandler}
            value={data.phone}
            onBlur={phoneBlurHandler}
            className={phoneState}
            type="text"
            placeholder="Phone number"
          />
          <p>{phoneHelpMessage}</p>
        </div>
        <div className="payment-form__input-wrap">
          <input
            onChange={addressChangeHandler}
            value={data.address}
            onBlur={addressBlurHandler}
            className={addressState}
            type="text"
            placeholder="Delivery address"
          />
          <p>{addressHelpMessage}</p>
        </div>
        <div className="payment-form__input-wrap">
          <input
            onChange={emailChangeHandler}
            value={data.email}
            onBlur={emailBlurHandler}
            className={emailState}
            type="text"
            placeholder="E-mail"
          />
          <p>{emailHelpMessage}</p>
        </div>
      </div>
  );
}
