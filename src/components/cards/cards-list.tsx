import React from "react";
import { CardItem } from "./card-item";
import { ICardStyle, IProductItem } from "../../interfaces";

type CardsListProps = {
  products: Array<IProductItem>;
  style: ICardStyle;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
};

export function CardList({ products, style, onAddCartItem, onRemoveCartItem }: CardsListProps) {
  return (
    <div className="cards-block__card-list">
      {products.map(product =>
        <CardItem style={style}
          product={product}
          key={product.data.id}
          onAddCartItem={(productItem) => { onAddCartItem(productItem) }}
          onRemoveCartItem={(productItem) => { onRemoveCartItem(productItem)}}
        />
      )}
    </div>
  );
}
