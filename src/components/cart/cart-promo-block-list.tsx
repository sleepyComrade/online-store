import { IPromoCode } from "../../interfaces";
import CartPromoBlockItem from "./cart-promo-block-item";

type CartPromoBlockListProps = {
  appliedPromoItems: Array<IPromoCode>;
  onDrop: (code: string) => void;
}

export default function CartPromoBlockList({appliedPromoItems, onDrop}: CartPromoBlockListProps) {

  return (
    <ul className="promo-block__applied-codes-list" >
      {appliedPromoItems.map(item => <CartPromoBlockItem key={item.code} promoItem={item}
        onDropCode={() => onDrop(item.code)} />)}      
    </ul>
  )
}