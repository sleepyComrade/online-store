import React from "react";
import { ICardStyle, IProductItem } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductItem>;
  style: ICardStyle;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
};

export function CardsWrap({ products, style, onAddCartItem, onRemoveCartItem }: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      {!products.length ? <h2>No products found</h2> : <CardList style={style} 
        products={products} 
        onAddCartItem={(productItem) => {onAddCartItem(productItem)}}
        onRemoveCartItem={(productItem) => {onRemoveCartItem(productItem)}}
        /> }
    </div>
  );
}
