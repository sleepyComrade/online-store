import React from "react";
import { IPromoCode } from "../../interfaces";

type CartPromoBlockItemProps = {
  promoItem: IPromoCode;
  onDropCode: (code: IPromoCode['code']) => void;
}

export default function CartPromoBlockItem({promoItem, onDropCode}: CartPromoBlockItemProps) {
  return (
    <li className="promo-block__applied-codes-item">
      <p>{promoItem.title} - {promoItem.discount}% </p>
      <button className="btn promo-block__button promo-block__button--drop" 
        onClick={() => {
          onDropCode(promoItem.code)
        }}
        >Drop</button>
    </li>
  )
}