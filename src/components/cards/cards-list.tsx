import React from "react";
import { CardItem } from "./card-item";
import { IProductData } from "../../interfaces";

export function CardList(props: { products: Array<IProductData>}) {
  return (
    <div className="cards-block__card-list">
      {props.products.map(product => <CardItem product={product} key={product.id} />)}
    </div>
  );
}