import React from "react";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
}

export default function FiltersBlockRange({ filterTitle }: FiltersBlockCheckboxProps) {
  return (
    <section>
      <h3>{filterTitle}</h3>
      <label className="login-checkbox" htmlFor="price">
        <input type="range" name="price" />
      </label>
    </section>
  )
}