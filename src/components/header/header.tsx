import React from "react";
import { Logo } from "./logo";
import { Cart } from "./cart";
import { Total } from "./total";

export function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <div className="header__payment-wrap">
        <Total></Total>
        <Cart></Cart>
      </div>
    </header>
  );
}
