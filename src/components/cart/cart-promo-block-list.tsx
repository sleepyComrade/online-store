import { IPromoCode } from "../../interfaces";
import CartPromoBlockItem from "./cart-promo-block-item";

type CartPromoBlockListProps = {
  appliedPromoItems: Array<IPromoCode>;
  onAppliedPromoItems: (arr: Array<IPromoCode>) => void;
}

export default function CartPromoBlockList({appliedPromoItems, onAppliedPromoItems}: CartPromoBlockListProps) {

  const dropCodeHandler = (itemCode: IPromoCode['code']) => {
    const currentIndex = appliedPromoItems.findIndex((item)=> item.code == itemCode);
    console.log(appliedPromoItems);
    return [...appliedPromoItems.slice(0, currentIndex), ...appliedPromoItems.slice(currentIndex + 1)];
 }

  return (
    <ul className="promo-block__applied-codes-list" onAppliedPromoItems={appliedPromoItems}>
      {appliedPromoItems.map(item => <CartPromoBlockItem key={item.code} promoItem={item}
        onDropCode={() =>  dropCodeHandler(item.code)}/>)}
    </ul>
  )
}