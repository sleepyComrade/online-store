import React from "react";
import { Found } from "../cards-navigation/found";
import { ViewSwitcher } from "../cards-navigation/view-switcher";

export function CardsNav() {
  return (
    <div className="cards-nav">
      <Found></Found>
      <ViewSwitcher></ViewSwitcher>
    </div>
  );
}