import React from "react";
import { IPersonalData, IPersonalDataValidity } from "../../interfaces";

type PersonalDataProps = {
  onChange: (data: IPersonalData, personalIsCorrect: IPersonalDataValidity) => void;
  initial: IPersonalData;
  correctInit: IPersonalDataValidity;
  regexes: {name: RegExp, phone: RegExp, address: RegExp, email: RegExp};
  onStateChange: (valueName: string) => void;
  onMessageChange: (valueName: string, index: number) => void;
  personalStates: IPersonalData;
  helpMessages: IPersonalData;
  onBlur: (value: string, regex: RegExp, valueName: string, index: number) => void;
}

export function PersonalData({onChange, initial, correctInit, regexes, onStateChange, onMessageChange, personalStates, helpMessages, onBlur}: PersonalDataProps) {
  const personalIsCorrect = {...correctInit};

  const nameBlurHandler = () => onBlur(initial.name, regexes.name, 'name', 0);
  const phoneBlurHandler = () => onBlur(initial.phone, regexes.phone, 'phone', 1);
  const addressBlurHandler = () => onBlur(initial.address, regexes.address, 'address', 2);
  const emailBlurHandler = () => onBlur(initial.email, regexes.email, 'email', 3);

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.nameIsCorrect = regexes.name.test(e.target.value.trim());
    initial.name = e.target.value;
    onChange(initial, personalIsCorrect);
    onMessageChange('name', 0);
    onStateChange('name');
  };

  const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.phoneIsCorrect = regexes.phone.test(e.target.value.trim());
    initial.phone = e.target.value;
    onChange(initial, personalIsCorrect);
    onMessageChange('phone', 1);
    onStateChange('phone');
  };

  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.addressIsCorrect = regexes.address.test(e.target.value.trim());
    initial.address = e.target.value;
    onChange(initial, personalIsCorrect);
    onMessageChange('address', 2);
    onStateChange('address');
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    personalIsCorrect.emailIsCorrect = regexes.email.test(e.target.value.trim());
    initial.email = e.target.value;
    onChange(initial, personalIsCorrect);
    onMessageChange('email', 3);
    onStateChange('email');
  };
  
  return (
    <div className="payment-form__personal-data">
        <h3 className="payment-form__block-name">Personal details</h3>
        <div className="payment-form__input-wrap">
          <input
            onChange={nameChangeHandler}
            value={initial.name}
            onBlur={nameBlurHandler}
            className={personalStates.name}
            type="text"
            placeholder="Name"
          />
          <p className="payment-form__help-msg">{helpMessages.name}</p>
        </div>
        <div className="payment-form__input-wrap">
          <input
            onChange={phoneChangeHandler}
            value={initial.phone}
            onBlur={phoneBlurHandler}
            className={personalStates.phone}
            type="text"
            placeholder="Phone number"
          />
          <p className="payment-form__help-msg">{helpMessages.phone}</p>
        </div>
        <div className="payment-form__input-wrap">
          <input
            onChange={addressChangeHandler}
            value={initial.address}
            onBlur={addressBlurHandler}
            className={personalStates.address}
            type="text"
            placeholder="Delivery address"
          />
          <p className="payment-form__help-msg">{helpMessages.address}</p>
        </div>
        <div className="payment-form__input-wrap">
          <input
            onChange={emailChangeHandler}
            value={initial.email}
            onBlur={emailBlurHandler}
            className={personalStates.email}
            type="text"
            placeholder="E-mail"
          />
          <p className="payment-form__help-msg">{helpMessages.email}</p>
        </div>
      </div>
  );
}
