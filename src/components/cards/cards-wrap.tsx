import React, { useEffect } from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductData>;
  style: ICardStyle;
  activeCategories: string[];
  activeBrands: string[];
}

export function CardsWrap({products, style, activeCategories, activeBrands}: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      {!products.length ? <h2>No products found</h2> : <CardList activeBrands={activeBrands} activeCategories={activeCategories} style={style} products={products} /> }
    </div>
  );
}