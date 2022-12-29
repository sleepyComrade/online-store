import { IProductData } from "../../interfaces";
import CartItem from "./cart-item";

type CartListProps = {
  productsInCart: Array<{data: IProductData, counter: number}>;
  onCounter: (id: IProductData['id'], value: number) => void; 
  startIndex: number;
}

export default function CartList({ productsInCart, onCounter,  startIndex}: CartListProps) {

  return (
    <ul className="cart__list">
      {productsInCart.map((item, index) => <CartItem key={item.data.id} itemNumber={index + 1 + startIndex} productInCart={item.data} 
        counter={item.counter} onCounter={(value) => onCounter(item.data.id, value + item.counter)} />)}
    </ul>
  )
}