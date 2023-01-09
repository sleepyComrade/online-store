import React from "react";

type TolalProps = {
  totalCost: number;
  totalCostWithDiscount: number;
}

export function Total({totalCost, totalCostWithDiscount}: TolalProps) {
  return (
    <p className="header__total">
      <span>Cart total: </span>
      ${new Intl.NumberFormat("en").format(totalCostWithDiscount ? totalCostWithDiscount : totalCost)}</p>
  );
}
