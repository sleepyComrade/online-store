import React, { useState } from "react";
import { CreditCard } from "./credit-card";
import { PersonalData } from "./personal-data";
import { IPersonalData, IPersonalDataValidity } from "../../interfaces";

export function PaymentForm(props: {setState: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [personalData, setPersonalData] = useState({name: '', phone: '', address: '', email: ''});
  const [personalIsCorrect, setPersonalCorrect] = useState({nameIsCorrect: false, phoneIsCorrect: false, addressIsCorrect: false, emailIsCorrect: false});
  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(personalData);
    console.log(personalIsCorrect);
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
        <CreditCard />
        <button onClick={submitForm}>Confirm</button>
      </form>
    </div>
  );
}
