import React, { useEffect } from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductData>;
  style: ICardStyle;
  activeCategories: string[];
  activeBrands: string[];
  sort: { sorted: string};
  onTotalChange: (length: number) => void;
}

export function CardsWrap({products, style, activeCategories, activeBrands, sort, onTotalChange}: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      <CardList onTotalChange={onTotalChange} sort={sort} activeBrands={activeBrands} activeCategories={activeCategories} style={style} products={products} />
    </div>
  );
}