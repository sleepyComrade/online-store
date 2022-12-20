import React, { useState } from "react";
import { CreditCard } from "./credit-card";
import { PersonalData } from "./personal-data";

export function PaymentForm(props: {setState: React.Dispatch<React.SetStateAction<boolean>>}) {
  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    props.setState(false);
    console.log("submit");
  };

  return (
    <div>
      <form className="payment-form">
        <PersonalData />
        <CreditCard />
        <button onClick={submitForm}>Confirm</button>
      </form>
    </div>
  );
}
