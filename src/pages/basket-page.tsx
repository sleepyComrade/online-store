import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";
import { PaymentForm } from "../components/payment-form/payment-form";
import { Modal } from "../components/payment-form/modal";

export default function BasketPage() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Header></Header>
      <main>
        <h2>Basket Page</h2>
        <Link to="/">
          Go to main page
        </Link>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>
        <button onClick={() => setIsModal(true)}>Pay</button>
      </main>
      <footer></footer>
      <Modal open={isModal} setState={setIsModal} >
        <PaymentForm setState={setIsModal} />
      </Modal>
    </>
  );
}