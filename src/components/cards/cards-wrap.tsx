import React, { useEffect } from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

export function CardsWrap(props: { products: Array<IProductData>, style: ICardStyle}) {
  return (
    <div className="cards-block__cards-wrap">
      {!props.products.length ? <h2>No products found</h2> : <CardList style={props.style} products={props.products} /> }
    </div>
  );
}