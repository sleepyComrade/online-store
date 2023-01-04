import React from "react";
import { Found } from "../cards-navigation/found";
import { ViewSwitcher } from "../cards-navigation/view-switcher";
import { Sort } from "../cards-navigation/sort";
import { Search } from "../cards-navigation/search";

type CardNavProps = {
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (value: string) => void;
  onStyleChange: (view:string) => void;
  total: number;
  search: string;
  sort: string;
}

export function CardsNav({ onStyleChange, onSortChange, total, onSearchChange, search, sort }: CardNavProps) {
  return (
    <div className="cards-nav">
      <Sort sort={sort} onSortChange={onSortChange}></Sort>
      <Found total={total}></Found>
      <Search search={search} onSearchChange={onSearchChange}></Search>
      <ViewSwitcher onStyleChange={onStyleChange}></ViewSwitcher>
    </div>
  );
}