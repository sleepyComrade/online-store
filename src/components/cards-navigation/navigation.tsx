import React from "react";
import { Found } from "../cards-navigation/found";
import { ViewSwitcher } from "../cards-navigation/view-switcher";
import { Sort } from "../cards-navigation/sort";

export function CardsNav() {
  return (
    <div className="cards-nav">
      <Sort></Sort>
      <Found></Found>
      <ViewSwitcher></ViewSwitcher>
    </div>
  );
}