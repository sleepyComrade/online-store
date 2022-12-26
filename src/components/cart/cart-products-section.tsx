import { useEffect, useState } from "react";
import CartList from "./cart-list";
import CartItemsPerPage from "./cart-items-per-page";
import CartPagination from "./cart-pagination";
import { IProductData } from "../../interfaces";

type CartProductsSectionProps = {
  cartItems: Array<{ data: IProductData, counter: number }>;
  setCartItems: React.Dispatch<React.SetStateAction<{
    data: IProductData;
    counter: number;
  }[]>>
}

export default function CartProductsSection({ cartItems, setCartItems }: CartProductsSectionProps) {
  
  const [countItemsPerPageCart, setCountItemsPerPageCart] = useState(5);
  const minItemsPerPage = 1;
  const countItemsPerPage: number = (Number.isNaN(countItemsPerPageCart) || countItemsPerPageCart === 0) ? minItemsPerPage : countItemsPerPageCart;
  const itemsPerPage = cartItems.filter(item => item.counter > 0).slice(0, countItemsPerPage);

  return (
    <section className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Products in Cart</h2>
        <CartItemsPerPage countItemsPerPageCart={countItemsPerPageCart}
          onCountItemsPerPageCart={setCountItemsPerPageCart} onBlur={() => setCountItemsPerPageCart(countItemsPerPage)} />

        <CartPagination countItemsPerPageCart={countItemsPerPage} cartProductsCount={cartItems.length} />
      </div>

      <div className="cart__products">
        <CartList productsInCart={itemsPerPage} onCounter={(itemId, value) => setCartItems((last) => {
          const currentIndex = last.findIndex((item) => item.data.id == itemId);
          return [...last.slice(0, currentIndex), { ...last[currentIndex], counter: value }, ...last.slice(currentIndex + 1)]
        })} />
      </div>
    </section>
  )
}