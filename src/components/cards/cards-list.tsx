import React from "react";
import { CardItem } from "./card-item";
import { IProductData, ICardStyle } from "../../interfaces";

type CardListProps = {
  products: Array<IProductData>;
  style: ICardStyle;
}

export function CardList({ products, style}: CardListProps) {
  return (
    <div className="cards-block__card-list">
      {products.map(product => <CardItem style={style} product={product} key={product.id} />)}
    </div>
  );
}