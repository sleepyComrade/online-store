import React from "react";
import { IPromoCode } from "../../interfaces";

type CartPromoBlockItemProps = {
  promoItem: IPromoCode;
}

export default function CartPromoBlockItem({promoItem}: CartPromoBlockItemProps) {
  return (
    <li className="promo-block__item">
      <p>{promoItem.title} - {promoItem.discount}% </p>
      <button className="btn promo-block__button promo-block__button--add">Add</button>
    </li>
  )
}