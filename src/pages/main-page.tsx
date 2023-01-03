import React from "react";
import { Link } from "react-router-dom";
import FiltersSection from "./../components/filters/filters-section";
import { IProductItem } from "./../interfaces";
import { CardsBlock } from "../components/cards/cards-block";

type MainPageProps = {
  productsItems: Array<IProductItem>;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
}

export default function MainPage({productsItems, onAddCartItem, onRemoveCartItem }: MainPageProps) {  
  return (
    <>
      <main>
        <Link to="/product/01">
          Go to product page
        </Link>
        <div className="main-page__content-wrap">
          <FiltersSection  products={productsItems} />
          <CardsBlock products={productsItems} 
            onAddCartItem={(productItem) => {onAddCartItem(productItem)}}
            onRemoveCartItem={(productItem) => {onRemoveCartItem(productItem)}}
          />
        </div>
      </main>
      <footer></footer>
    </>
  );
}