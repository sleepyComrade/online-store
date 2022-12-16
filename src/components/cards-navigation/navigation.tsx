import React from "react";
import { Found } from "../cards-navigation/found";
import { ViewSwitcher } from "../cards-navigation/view-switcher";
import { Sort } from "../cards-navigation/sort";
import { Search } from "../cards-navigation/search";

export function CardsNav() {
  return (
    <div className="cards-nav">
      <Sort></Sort>
      <Found></Found>
      <Search></Search>
      <ViewSwitcher></ViewSwitcher>
    </div>
  );
}