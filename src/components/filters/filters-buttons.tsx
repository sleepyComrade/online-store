import React from "react";

type FiltersButtonsProps = {
  onReset: () => void;
}

export default function FiltersButtons({onReset}: FiltersButtonsProps) {
  return (
    <div className="filters__buttons">
      <button onClick={onReset} className="filters__button btn">Reset Filters</button>
      <button className="filters__button btn">Copy Link</button>
    </div>
  )
}