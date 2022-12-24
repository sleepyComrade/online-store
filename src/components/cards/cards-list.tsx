import React from "react";
import { CardItem } from "./card-item";
import { IProductData, ICardStyle } from "../../interfaces";

export function CardList(props: { products: Array<IProductData>, style: ICardStyle}) {
  return (
    <div className="cards-block__card-list">
      {props.products.map(product => <CardItem style={props.style} product={product} key={product.id} />)}
    </div>
  );
}