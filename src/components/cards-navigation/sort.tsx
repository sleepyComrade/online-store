import React from "react";

type SortProps = {
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sort: string;
}

export function Sort({onSortChange, sort}: SortProps) {
  return (
    <div className="cards-nav__sort-wrap">
      <select onChange={onSortChange} className="cards-nav__select" defaultValue={sort}>
        <option value="" disabled>Sort by</option>
        <option value="low-price">Lowest price</option>
        <option value="high-price">Highest price</option>
        <option value="low-rating">Lowest rating</option>
        <option value="high-rating">Highest rating</option>
        <option value="low-discountPercentage">Smallest discount</option>
        <option value="high-discountPercentage">Biggest discount</option>
      </select>
    </div>
  );
}