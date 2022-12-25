import { Logo } from "./logo";
import { Cart } from "./cart";
import { Total } from "./total";
import { useContext } from "react";
import { AppContext } from '../app-context/app-context';

type HeaderProps = {
  cartItemsCount: number;
  totalCost: number;
  totalCostWithDiscount: number;
}

export function Header({cartItemsCount, totalCost, totalCostWithDiscount}: HeaderProps) {
  // const context = useContext(AppContext);

  return (
    <header className="header">
      <Logo></Logo>
      <div className="header__payment-wrap">
        {/* {context?.a}
        <button onClick={() => {
          if (!context) throw new Error(); // ???
          context.setA(20)
        }
        }></button> */}
        <Total totalCost={totalCost} totalCostWithDiscount={totalCostWithDiscount}></Total>
        <Cart cartItemsCount={cartItemsCount}></Cart>
      </div>
    </header>
  );
}
