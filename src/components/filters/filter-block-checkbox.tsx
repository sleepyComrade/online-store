import React, { useState } from "react";
import FilterCheckbox from "./filter-checkbox";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
  ProductsFilters: Array<string>;
  onCategoryChange: (data: string[]) => void;
  categoryState: boolean[];
  onStateChange: (data: boolean[]) => void;
}

export default function FiltersBlockCheckbox({ filterTitle, ProductsFilters, onCategoryChange, categoryState, onStateChange }: FiltersBlockCheckboxProps) {
  return (
    <div className="filters__block filters__block--checkbox">
      <h3 className="filters__block-title">{filterTitle}</h3>
      <div className="filters__checkbox-wrapper">
      { ProductsFilters.map((item, index) => <FilterCheckbox onStateChange={() => {
        categoryState[index] = !categoryState[index];
        onStateChange(categoryState);
        const activeCat = ProductsFilters.filter((cat, i) => categoryState[i]);
        onCategoryChange(activeCat);
      }} state={categoryState[index]} key={index} filter={item} />) }
      </div>
    </div>
  )
}