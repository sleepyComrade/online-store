import React, { useEffect } from "react";
import { IProductData } from "../../interfaces";
import { CardList } from "./cards-list";

export function CardsWrap(props: { products: Array<IProductData>}) {
  return (
    <div>
      {!props.products.length ? <h1>No products found</h1> : <CardList products={props.products} /> }
    </div>
  );
}