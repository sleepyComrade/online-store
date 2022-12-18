import { useState } from "react";
import cart from "../../assets/svg/cart-icon.png";
import { Link } from "react-router-dom";

export function Cart() {
  const [count, setCount] = useState(0);
  return (
    <Link to="/basket">
      <div className="header__cart-wrap">
        <div className="header__cart-counter">
          <span>{count}</span>
        </div>
        <img className="header__logo" src={cart} alt="cart icon" />
      </div>
    </Link>
  );
}
