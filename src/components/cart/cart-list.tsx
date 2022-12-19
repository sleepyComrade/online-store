import { IProductData } from "../../interfaces";
import CartItem from "./cart-item";

type CartListProps = {
  productsInCart: Array<IProductData>;
}

export default function CartList({ productsInCart }: CartListProps) {
  return (
    <ul className="cart__list">
      {productsInCart.map((item, index) => <CartItem key={item.id} itemNumber={index + 1}  productInCart={item}/>)}
    </ul>
  )
}