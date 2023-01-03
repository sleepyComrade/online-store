import React from "react";
import { CardItem } from "./card-item";
import { IProductData, ICardStyle, IProductItem } from "../../interfaces";

type CardListProps = {
  style: ICardStyle;
  products: Array<IProductItem>;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
}

export function CardList({ products, style, onAddCartItem, onRemoveCartItem }: CardListProps) {
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