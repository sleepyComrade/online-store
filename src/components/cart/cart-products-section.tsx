import { useEffect, useState } from "react";
import CartList from "./cart-list";

export default function CartProductsSection() {
  const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/products?limit=7')
        .then(res => res.json())
        // .then(data => console.log(data.products))
        .then(data => setCartItems(data.products))
    }, []);

  return (
    <section className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Products in Cart</h2>
        <div className="cart__count">
          <input type="number" />
        </div>
        <div className="cart__pagination"></div>
      </div>

      <div className="cart__products" >
        <CartList productsInCart={cartItems}/>
      </div>
    </section>
  )
}