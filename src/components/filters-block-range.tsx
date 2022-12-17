import React from "react";
import FilterRange from "./filter-range";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
}

export default function FiltersBlockRange({ filterTitle }: FiltersBlockCheckboxProps) {
  return (
    <div className="filters__block filters__block--range">
      <h3 className="filters__block-title">{filterTitle}</h3>
      <div className="filters__range-wrapper">
       <FilterRange />

      </div>
    </div>
  )
}