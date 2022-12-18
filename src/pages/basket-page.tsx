import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";
import { PaymentForm } from "../components/payment-form/payment-form";

export default function BasketPage() {
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
        <PaymentForm />
      </main>
      <footer></footer>
    </>
  );
}