import React, { useState } from "react";

export function PaymentForm() {
  const inputState = {
    initial: "payment-form__input",
    incorrect: "payment-form__input payment-form__input_incorrect",
    correct: "payment-form__input payment-form__input_correct",
  };

  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const [nameIsCorrect, setNameCorrectness] = useState(false);
  const [phoneNumIsCorrect, setPhoneNumCorrectness] = useState(false);
  const [addressIsCorrect, setAddressCorrectness] = useState(false);
  const [emailIsCorrect, setEmailCorrectness] = useState(false);

  const [nameState, setNameState] = useState(inputState.initial);
  const [phoneState, setPhoneState] = useState(inputState.initial);
  const [addressState, setAddressState] = useState(inputState.initial);
  const [emailState, setEmailState] = useState(inputState.initial);

  const [nameHelpMessage, setNameHelpMessage] = useState("Enter your name");
  const [phoneHelpMessage, setPhoneHelpMessage] = useState(
    "Enter your phone number"
  );
  const [addressHelpMessage, setAddressHelpMessage] =
    useState("Enter your address");
  const [emailHelpMessage, setEmailHelpMessage] = useState("Enter your email");

  const setStates = (
    name: string,
    regex: RegExp,
    setMsg: React.Dispatch<React.SetStateAction<string>>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    setCorrectness: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (regex.test(name.trim())) {
      setMsg("Correct");
      setState(inputState.correct);
      setCorrectness(true);
    } else {
      setMsg("Incorrect");
      setState(inputState.incorrect);
      setCorrectness(false);
    }
    if (name.trim() === "") {
      setMsg("Empty");
      setState(inputState.incorrect);
      setCorrectness(false);
    }
  };

  const nameBlurHandler = () => {
    const regex = /^((\b[a-zA-Z]{3,40}\b)\s*){2,}$/;
    setStates(name, regex, setNameHelpMessage, setNameState, setNameCorrectness);
  };

  const phoneBlurHandler = () => {
    const regex = /^\+\d{9,}$/;
    setStates(phoneNum, regex, setPhoneHelpMessage, setPhoneState, setPhoneNumCorrectness);
  };

  const addressBlurHandler = () => {
    const regex = /^((\b[a-zA-Z0-9]{5,40}\b)\s*){3,}$/;
    setStates(address, regex, setAddressHelpMessage, setAddressState, setAddressCorrectness);
  };

  const emailBlurHandler = () => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setStates(email, regex, setEmailHelpMessage, setEmailState, setEmailCorrectness);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameHelpMessage("Enter your name");
    setNameState(inputState.initial);
  };

  const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
    setPhoneHelpMessage("Enter your phone number");
    setPhoneState(inputState.initial);
  };

  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setAddressHelpMessage("Enter your address");
    setAddressState(inputState.initial);
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailHelpMessage("Enter your email");
    setEmailState(inputState.initial);
  };

  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form className="payment-form">
      <div>
        <h3 className="payment-form__block-name">Personal details</h3>
        <div className="payment-form__input-wrap">
          <input
            onChange={nameChangeHandler}
            value={name}
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
            value={phoneNum}
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
            value={address}
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
            value={email}
            onBlur={emailBlurHandler}
            className={emailState}
            type="text"
            placeholder="E-mail"
          />
          <p>{emailHelpMessage}</p>
        </div>
      </div>
      <button onClick={submitForm}>Confirm</button>
    </form>
  );
}
