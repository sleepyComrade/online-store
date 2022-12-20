import React, { useState } from "react";
import { CreditCard } from "./credit-card";
import { PersonalData } from "./personal-data";
import { IPersonalData, IPersonalDataValidity, ICardData, ICardDataValidity } from "../../interfaces";

export function PaymentForm(props: {setState: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [personalData, setPersonalData] = useState({name: '', phone: '', address: '', email: ''});
  const [personalIsCorrect, setPersonalCorrect] = useState({nameIsCorrect: false, phoneIsCorrect: false, addressIsCorrect: false, emailIsCorrect: false});
  const [cardData, setCardData] = useState({holder: '', number: '', date: '', cvv: ''});
  const [cardIsCorrect, setCardCorrect] = useState({holderIsCorrect: false, numberIsCorrect: false, dateIsCorrect: false, cvvIsCorrect: false});
  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(personalData);
    console.log(personalIsCorrect);
    console.log(cardData);
    console.log(cardIsCorrect);
    props.setState(false);
    console.log("submit");
  };

  return (
    <div>
      <form className="payment-form">
        <PersonalData initial={personalData} correctInit={personalIsCorrect} onChange={(data: IPersonalData, personalIsCorrect: IPersonalDataValidity) => {
          setPersonalCorrect(personalIsCorrect);
          setPersonalData(data);
        }}/>
        <CreditCard initial={cardData} correctInit={cardIsCorrect} onChange={(data: ICardData, cardIsCorrect: ICardDataValidity) => {
          setCardCorrect(cardIsCorrect);
          setCardData(data);
        }} />
        <button onClick={submitForm}>Confirm</button>
      </form>
    </div>
  );
}
