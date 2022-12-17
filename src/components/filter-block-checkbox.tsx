import React from "react";
import FilterCheckbox from "./filter-checkbox";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
  ProductsFilters: Array<string>;
}

export default function FiltersBlockCheckbox({ filterTitle, ProductsFilters }: FiltersBlockCheckboxProps) {
  return (
    <div className="filters__block filters__block--checkbox">
      <h3 className="filters__block-title">{filterTitle}</h3>
      <div className="filters__checkbox-wrapper">
      { ProductsFilters.map((item) => <FilterCheckbox key={item} filter={item} />) }
      </div>      
    </div>
  )
}