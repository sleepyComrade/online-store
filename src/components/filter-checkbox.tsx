import React from "react";

type FilterCheckboxProps = {
  filter: string;
}

export default function FilterCheckbox({filter} : FilterCheckboxProps) {
  return (
    <div>
      <label className="login-checkbox" htmlFor={filter}>
        <input type="checkbox" name={filter} id={filter} />
        {filter}
      </label>
      <p>
        <span>0</span> / <span>5</span>
      </p>
    </div>
  )
}