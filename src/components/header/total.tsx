import { useState } from "react";

export function Total() {
  const [total, setTotal] = useState(0);
  return (
    <p className="header__total"><span>Cart total: </span>${total}.00</p>
  );
}
