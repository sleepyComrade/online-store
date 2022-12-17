import React from "react";

type FilterCheckboxProps = {
  filter: string;
}

export default function FilterCheckbox({filter} : FilterCheckboxProps) {
  return (
    <div className="filter-checkbox">
      <input className="visually-hidden filter-checkbox__input" type="checkbox" name={filter} id={filter}/>
      <label className="filter-checkbox__label" htmlFor={filter}>{filter}</label>
      <p className="filter-checkbox__count">
        <span>0</span> / <span>5</span>
      </p>
    </div>
  )
}