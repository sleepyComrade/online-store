import React from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductData>;
  style: ICardStyle;
  activeCategories: string[];
  activeBrands: string[];
  sort: { sorted: string };
  onTotalChange: (length: number) => void;
  searched: string;
  priceRange: {min: string, max: string};
  queryCat: string[];
};

export function CardsWrap({
  products,
  style,
  activeCategories,
  activeBrands,
  sort,
  onTotalChange,
  searched,
  priceRange,
  queryCat
}: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      <CardList
        queryCat={queryCat}
        onTotalChange={onTotalChange}
        sort={sort}
        activeBrands={activeBrands}
        activeCategories={activeCategories}
        style={style}
        products={products}
        searched={searched}
        priceRange={priceRange}
      />
    </div>
  );
}
