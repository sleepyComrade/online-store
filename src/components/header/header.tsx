import React from "react";
import { Logo } from "./logo";
import { Cart } from "./cart";

export function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <div>
        <Cart></Cart>
      </div>
    </header>
  );
}
