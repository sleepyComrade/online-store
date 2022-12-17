import React from "react";

export default function FilterRange() {
  return (
    <div className="filter-range">
         <div className="filter-range__values">
          <div className="filter-range__field">
            <span>Min</span>
            <span className="filter-range__value filter-range__value--min">0</span>
          </div>

          <div className="filter-range__separator"> - </div>

          <div className="filter-range__field">
            <span>Max</span>
            <span className="filter-range__value filter-range__value--max">100000</span>
          </div>
        </div>

        <div className="filter-range__slider">
          <div className="filter-range__progress"></div>
        </div>

        <div className="filter-range__container">
          <input type="range" className="filter-range__input filter-range__input--min" min="0" max="10000" defaultValue={0}/>
          <input type="range" className="filter-range__input filter-range__input--max" min="0" max="10000" defaultValue={100000}/>
        </div>
    </div>
  )
}