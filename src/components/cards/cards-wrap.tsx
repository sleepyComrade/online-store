import React from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductData>;
  style: ICardStyle;
  sort: { sorted: string };
  onTotalChange: (length: number) => void;
  searched: string;
  priceRange: {min: string, max: string};
  queryCat: string[];
  queryBrand: string[];
};

export function CardsWrap({
  products,
  style,
  sort,
  onTotalChange,
  searched,
  priceRange,
  queryCat,
  queryBrand
}: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      <CardList
        queryBrand={queryBrand}
        queryCat={queryCat}
        onTotalChange={onTotalChange}
        sort={sort}
        style={style}
        products={products}
        searched={searched}
        priceRange={priceRange}
      />
    </div>
  );
}
