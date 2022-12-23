import { IPromoCode } from "../../interfaces";
import CartPromoBlockItem from "./cart-promo-block-item";

type CartPromoBlockListProps = {
  promoItems: Array<IPromoCode>;
}

export default function CartPromoBlockList({promoItems}: CartPromoBlockListProps) {
  return (
    <ul className="promo-block__list">
      {promoItems.map(item => <CartPromoBlockItem key={item.code} promoItem={item}/>)}
    </ul>
  )
}