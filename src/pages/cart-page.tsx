import React, { useState } from "react";
import { PaymentForm } from "../components/payment-form/payment-form";
import { Modal } from "../components/payment-form/modal";
import CartProductsSection from "../components/cart/cart-products-section";
import CartPromoBlock from "../components/cart/cart-promo-block";
import { IProductData, IPromoCode } from "../interfaces";

type CartPageProps = {
  cartItems: {
    data: IProductData;
    counter: number;
  }[];
  setCartItems: React.Dispatch<React.SetStateAction<{
    data: IProductData;
    counter: number;
  }[]>>
  cartItemsCount: number;
  totalCost: number;
  promoItem: null | IPromoCode;
  setPromoItem: React.Dispatch<React.SetStateAction<IPromoCode | null>>;
  appliedPromoItems: IPromoCode[];
  setAppliedPromoItems: React.Dispatch<React.SetStateAction<IPromoCode[]>>;
  totalCostWithDiscount: number;
}

export default function CartPage({ cartItems, setCartItems, cartItemsCount, totalCost, promoItem, setPromoItem, appliedPromoItems, setAppliedPromoItems, totalCostWithDiscount }: CartPageProps) {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <main>
        <button onClick={() => setIsModal(true)}>Pay</button>
        <div className="main-container main-container--cart-page">
          <CartProductsSection cartItems={cartItems} setCartItems={setCartItems} />
          <CartPromoBlock 
            cartItemsCount={cartItemsCount}
            totalCost={totalCost} 
            promoItem={promoItem} 
            setPromoItem={setPromoItem} 
            appliedPromoItems={appliedPromoItems}
            setAppliedPromoItems={setAppliedPromoItems}
            totalCostWithDiscount={totalCostWithDiscount} />
        </div>
      </main>
      <footer></footer>
      <Modal open={isModal} setState={setIsModal} >
        <PaymentForm setState={setIsModal} />
      </Modal>
    </>
  );
}