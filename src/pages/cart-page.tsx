import React from "react";
import CartProductsSection from "../components/cart/cart-products-section";
import CartPromoBlock from "../components/cart/cart-promo-block";
import { IProductItem, IPromoCode } from "../interfaces";

type CartPageProps = {
  cartItems: Array<IProductItem>;
  setCartItems: React.Dispatch<React.SetStateAction<IProductItem[]>>
  cartItemsCount: number;
  totalCost: number;
  promoItem: null | IPromoCode;
  setPromoItem: React.Dispatch<React.SetStateAction<IPromoCode | null>>;
  appliedPromoItems: Array<IPromoCode>;
  setAppliedPromoItems: React.Dispatch<React.SetStateAction<IPromoCode[]>>;
  totalCostWithDiscount: number;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartPage({ cartItems, setCartItems, cartItemsCount, totalCost, promoItem, setPromoItem, appliedPromoItems, setAppliedPromoItems, totalCostWithDiscount, isModal, setIsModal}: CartPageProps) {

  return (
    <>
      <main>
        <div className="main-container main-container--cart-page">
          <CartProductsSection cartItems={cartItems} setCartItems={setCartItems} />
          <CartPromoBlock 
            cartItemsCount={cartItemsCount}
            totalCost={totalCost} 
            promoItem={promoItem} 
            setPromoItem={setPromoItem} 
            appliedPromoItems={appliedPromoItems}
            setAppliedPromoItems={setAppliedPromoItems}
            totalCostWithDiscount={totalCostWithDiscount}
            isModal={isModal}
            setIsModal={setIsModal} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}