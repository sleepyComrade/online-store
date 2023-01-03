import React from "react";
import { useState } from "react";

type TolalProps = {
  totalCost: number;
  totalCostWithDiscount: number;
}

export function Total({totalCost, totalCostWithDiscount}: TolalProps) {
  const [total, setTotal] = useState(0);
  return (
    <p className="header__total">
      <span>Cart total: </span>
      ${new Intl.NumberFormat("en").format(totalCostWithDiscount ? totalCostWithDiscount : totalCost)}</p>
  );
}
