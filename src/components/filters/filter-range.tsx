import React, { useState } from "react";

type FilterRangeProps = {
  onChange: (data: {min: string, max: string}) => void;
}

export default function FilterRange({onChange}: FilterRangeProps) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);
  const maxLimit = 2000;
  const minLimit = 0;

  const left = (minValue - minLimit) / (maxLimit - minLimit) * 100 + '%';
  const right = (1 - (maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%';
  const leftReverse = (maxValue - minLimit) / (maxLimit - minLimit) * 100 + '%';
  const rightReverse = (1 - (minValue - minLimit) / (maxLimit - minLimit)) * 100 + '%';

  return (
    <div className="filter-range">
      <div className="filter-range__values">
        <div className="filter-range__field">
          <span>Min</span>
          <span className="filter-range__value filter-range__value--min">{minValue > maxValue ? maxValue : minValue}</span>
        </div>

        <div className="filter-range__separator"> - </div>

        <div className="filter-range__field">
          <span>Max</span>
          <span className="filter-range__value filter-range__value--max">{maxValue < minValue ? minValue : maxValue}</span>
        </div>
      </div>

      <div className="filter-range__slider">
        <div className="filter-range__progress" style={{
          left: minValue > maxValue ? leftReverse : left,
          right: minValue > maxValue ? rightReverse : right
        }}></div>
      </div>

      <div className="filter-range__container">
        <input type="range" className="filter-range__input filter-range__input--min" min={minLimit} max={maxLimit} value={minValue}
          onChange={(e) => {
            setMinValue(+e.target.value);
            onChange({min: minValue + '', max: maxValue + ''});
          }} />
        <input type="range" className="filter-range__input filter-range__input--max" min={minLimit} max={maxLimit} value={maxValue}
          onChange={(e) => {
            setMaxValue(+e.target.value);
            onChange({min: minValue + '', max: maxValue + ''});
          }} />
      </div>
    </div>
  )
}