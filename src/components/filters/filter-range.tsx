import React, { useEffect, useState } from "react";

type FilterRangeProps = {
  onChange: (data: {min: string, max: string}) => void;
  minValue: string;
  maxValue: string;
  maxLmt: number;
}

export default function FilterRange({ onChange, minValue: _minValue, maxValue: _maxValue, maxLmt }: FilterRangeProps) {
  const [maxValue, setMaxValue] = useState(_maxValue);
  const [minValue, setMinValue] = useState(_minValue);

  useEffect(() => {
    const value = minValue;
    const a = window.setTimeout(() => {
      onChange({min: value, max: maxValue});
    }, 500);
    return () => {
      if (a !== null) {
        window.clearTimeout(a);
      }
    }
}, [minValue])

  useEffect(() => {
      const value = maxValue;
      const a = window.setTimeout(() => {
        onChange({min: minValue, max: value});
      }, 500);
      return () => {
        if (a !== null) {
          window.clearTimeout(a);
        }
      }
  }, [maxValue])

  const maxLimit = maxLmt;
  const minLimit = 0;

  const left = (+minValue - minLimit) / (maxLimit - minLimit) * 100 + '%';
  const right = (1 - (+maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%';
  const leftReverse = (+maxValue - minLimit) / (maxLimit - minLimit) * 100 + '%';
  const rightReverse = (1 - (+minValue - minLimit) / (maxLimit - minLimit)) * 100 + '%';

  return (
    <div className="filter-range">
      <div className="filter-range__values">
        <div className="filter-range__field">
          <span>Min</span>
          <span className="filter-range__value filter-range__value--min">{+minValue > +maxValue ? maxValue : minValue}</span>
        </div>

        <div className="filter-range__separator"> - </div>

        <div className="filter-range__field">
          <span>Max</span>
          <span className="filter-range__value filter-range__value--max">{+maxValue < +minValue ? minValue : maxValue}</span>
        </div>
      </div>

      <div className="filter-range__slider">
        <div className="filter-range__progress" style={{
          left: +minValue > +maxValue ? leftReverse : left,
          right: +minValue > +maxValue ? rightReverse : right
        }}></div>
      </div>

      <div className="filter-range__container">
        <input type="range" className="filter-range__input filter-range__input--min" min={minLimit} max={maxLimit} value={minValue}
          onChange={(e) => {
            setMinValue(e.target.value);
          }} />
        <input type="range" className="filter-range__input filter-range__input--max" min={minLimit} max={maxLimit} value={maxValue}
          onChange={(e) => {
            setMaxValue(e.target.value);
          }} />
      </div>
    </div>
  )
}