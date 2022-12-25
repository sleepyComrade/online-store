import { useState } from "react";
import cart from "../../assets/svg/cart-icon.png";
import { Link } from "react-router-dom";
import { IProductData } from "../../interfaces";

type CartProps = {
  cartItemsCount: number;
}

export function Cart({cartItemsCount}: CartProps) {
  // const [count, setCount] = useState(0);
  
  return (
    <Link to="/cart">
      <div className="header__cart-wrap">
        <div className="header__cart-counter">
          <span>{cartItemsCount}</span>
        </div>
        <img className="header__logo" src={cart} alt="cart icon" />
      </div>
    </Link>
  );
}
