import React, { useState } from "react";

export default function FilterRange() {
  const [minValue, setMinValue] = useState(2500);
  const [maxValue, setMaxValue] = useState(7500);
  const maxLimit = 10000;
  const minLimit = 2000;

  return (
    <div className="filter-range">
      <div className="filter-range__values">
        <div className="filter-range__field">
          <span>Min</span>
          <span className="filter-range__value filter-range__value--min">{minLimit}</span>
        </div>

        <div className="filter-range__separator"> - </div>

        <div className="filter-range__field">
          <span>Max</span>
          <span className="filter-range__value filter-range__value--max">{maxLimit}</span>
        </div>
      </div>

      <div className="filter-range__slider">
        <div className="filter-range__progress" style={{
          left: (minValue - minLimit) / (maxLimit - minLimit) * 100 + '%',
          right: (1 - (maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%'
        }}></div>
      </div>

      <div className="filter-range__container">
        <input type="range" className="filter-range__input filter-range__input--min" min={minLimit} max={maxLimit} value={minValue}
          onChange={(e) => { setMinValue(e.target.valueAsNumber) }} />
        <input type="range" className="filter-range__input filter-range__input--max" min={minLimit} max={maxLimit} value={maxValue}
          onChange={(e) => { setMaxValue(e.target.valueAsNumber) }} />
      </div>
    </div>
  )
}