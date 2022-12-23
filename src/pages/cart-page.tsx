import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";
import { PaymentForm } from "../components/payment-form/payment-form";
import { Modal } from "../components/payment-form/modal";
import CartProductsSection from "../components/cart/cart-products-section";
import CartPromoBlock from "../components/cart/cart-promo-block";

export default function CartPage() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Header></Header>
      <main>
        <h2>Cart Page</h2>
        <Link to="/">
          Go to main page
        </Link>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>
        <button onClick={() => setIsModal(true)}>Pay</button>

        <div className="main-container main-container--cart-page">
          <CartProductsSection />
          <CartPromoBlock />
        </div>
      </main>
      <footer></footer>
      <Modal open={isModal} setState={setIsModal} >
        <PaymentForm setState={setIsModal} />
      </Modal>
    </>
  );
}