import React from "react";
import { IPromoCode } from "../../interfaces";
import { PromoCodes } from "../../const";
import CartPromoBlockList from "./cart-promo-block-list";
import { Modal } from "../payment-form/modal";
import { PaymentForm } from "../payment-form/payment-form";

type CartPromoBlockProps = {
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

export default function CartPromoBlock({ cartItemsCount, totalCost, promoItem, setPromoItem, appliedPromoItems, setAppliedPromoItems, totalCostWithDiscount, isModal, setIsModal }: CartPromoBlockProps) {

  const dropCodeHandler = (itemCode: IPromoCode['code'], appliedPromoItems: Array<IPromoCode>) => {
    const currentIndex = appliedPromoItems.findIndex((item) => item.code == itemCode);
    console.log(appliedPromoItems);
    return [...appliedPromoItems.slice(0, currentIndex), ...appliedPromoItems.slice(currentIndex + 1)];
  }

  return (
    <>
      <section className="cart__promo-block promo-block">
        <div className="promo-block__header">
          <h2 className="promo-block__title">Summary</h2>
        </div>
        <div className="promo-block__calculation">
          <p className="promo-block__products-count">Products: <span>{cartItemsCount}</span></p>

          <p className={`${appliedPromoItems.length === 0 ? "promo-block__total-price" : "promo-block__total-price promo-block__total-price--cross-out"}`}>
            Total: <span>${new Intl.NumberFormat("en").format(totalCost)}</span>
          </p>

          {appliedPromoItems.length !== 0 &&
            <p className="promo-block__total-price">Total: <span>${new Intl.NumberFormat("en").format(totalCostWithDiscount)}</span></p>}


          {/* выводим список примененных кодов */}
          {appliedPromoItems.length !== 0 &&
            <div className="promo-block__applied-codes">
              <h3>Applied codes</h3>
              <CartPromoBlockList appliedPromoItems={appliedPromoItems} onDrop={(code: string) => {
                setAppliedPromoItems((last) => dropCodeHandler(code, last));
              }} />
            </div>}

          <div className="promo-block__code">
            <input className="promo-block__code-input"
              type="text"
              name="promo-block-code-input"
              placeholder="Enter promo code"
              onChange={(e) => {
                const promo = PromoCodes.find(item => {
                  return e.target.value === item.code;
                }) || null;
                setPromoItem(promo);
              }} />

            {promoItem &&
              <div className="promo-block__found-code">
                <p>{promoItem.title} - {promoItem.discount}%</p>
                {/* кнопка Add отображается, только если массив примененных кодов не содержит данный код */}
                {!appliedPromoItems.includes(promoItem) && <button className={"btn promo-block__button promo-block__button--add"}
                  onClick={() => {
                    setAppliedPromoItems([...appliedPromoItems, promoItem]);
                  }}>Add</button>}
              </div>}

            <p className="promo-block__promo-test">Promo for test: "rs", "epm", "blackfriday"</p>
          </div>
          <button className="btn promo-block__button promo-block__button--buy" onClick={() => setIsModal(true)}>Buy now</button>
        </div>
      </section>
      <Modal open={isModal} setState={setIsModal}>
        <PaymentForm setState={setIsModal} />
      </Modal>
    </>
  )
}