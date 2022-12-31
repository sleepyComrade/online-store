import React, { useEffect } from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductData>;
  style: ICardStyle;
}

export function CardsWrap({ products, style}: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      {!products.length ? <h2>No products found</h2> : <CardList style={style} products={products} /> }
    </div>
  );
}