import React, { useEffect } from "react";
import { IProductData } from "../../interfaces";
import { CardList } from "./cards-list";

export function CardsWrap(props: { products: Array<IProductData>}) {
  return (
    <div className="cards-block__cards-wrap">
      {!props.products.length ? <h2>No products found</h2> : <CardList products={props.products} /> }
    </div>
  );
}