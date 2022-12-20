import { useEffect, useState } from "react";
import CartList from "./cart-list";
import CartItemsPerPage from "./cart-items-per-page";
import CartPagination from "./cart-pagination";

export default function CartProductsSection() {
  const [cartItems, setCartItems] = useState([]);
  const [countItemsPerPageCart, setCountItemsPerPageCart] = useState(5);
  const minItemsPerPage = 1;
  const countItemsPerPage = (Number.isNaN(countItemsPerPageCart)  || countItemsPerPageCart === 0) ? minItemsPerPage : countItemsPerPageCart; 
 
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=7')
      .then(res => res.json())
      .then(data => setCartItems(data.products))
  }, []); 

  return (
    <section className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Products in Cart</h2>       
        <CartItemsPerPage countItemsPerPageCart={countItemsPerPageCart} 
          onCountItemsPerPageCart={setCountItemsPerPageCart} onBlur={() => setCountItemsPerPageCart(countItemsPerPage)}/>  

        <CartPagination countItemsPerPageCart={countItemsPerPage} productsCount={cartItems.length}/> 
      </div>

      <div className="cart__products">
        <CartList productsInCart={cartItems} />
      </div>
    </section>
  )
}