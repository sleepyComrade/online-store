import { Logo } from "./logo";
import { Cart } from "./cart";
import { Total } from "./total";

type HeaderProps = {
  cartItemsCount: number;
  totalCost: number;
  totalCostWithDiscount: number;
}

export function Header({cartItemsCount, totalCost, totalCostWithDiscount}: HeaderProps) {

  return (
    <header className="header">
      <Logo></Logo>
      <div className="header__payment-wrap">
        <Total totalCost={totalCost} totalCostWithDiscount={totalCostWithDiscount}></Total>
        <Cart cartItemsCount={cartItemsCount}></Cart>
      </div>
    </header>
  );
}
