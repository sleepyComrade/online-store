import React from "react";
import logo from "../assets/images/online-store.png";

export function Logo() {
  return (
    <a href="#">
      <img className="header__logo" src={logo} alt="logo image" />
    </a>
  );
}