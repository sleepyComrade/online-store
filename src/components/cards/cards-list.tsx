import React from "react";
import { CardItem } from "./card-item";
import { IProductData, ICardStyle } from "../../interfaces";

type CardsListProps = {
  products: Array<IProductData>;
  style: ICardStyle;
  activeCategories: string[];
  activeBrands: string[];
};

export function CardList({ products, style, activeCategories, activeBrands }: CardsListProps) {
  return (
    <div className="cards-block__card-list">
      {products
        .filter(
          (product) =>
            activeCategories.includes(product.category) || !activeCategories.length
        )
        .filter(
          (product) =>
          activeBrands.includes(product.brand) || !activeBrands.length
        )
        .map((product) => (
          <CardItem style={style} product={product} key={product.id} />
        ))}
    </div>
  );
}
