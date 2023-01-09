import React from "react";
import FilterRange from "./filter-range";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
  onChange: (data: {min: string, max: string}) => void;
  minValue: string;
  maxValue: string;
  maxLimit: number;
}

export default function FiltersBlockRange({ filterTitle, onChange, minValue, maxValue, maxLimit }: FiltersBlockCheckboxProps) {
  return (
    <div className="filters__block filters__block--range">
      <h3 className="filters__block-title">{filterTitle}</h3>
      <div className="filters__range-wrapper">
        <FilterRange maxLmt={maxLimit} minValue={minValue} maxValue={maxValue} onChange={onChange} />
      </div>
    </div>
  )
}