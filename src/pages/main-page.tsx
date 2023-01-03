import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FiltersSection from "./../components/filters/filters-section";
import { IProductData, IProductItem } from "./../interfaces";
import { Header } from "../components/header/header";
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
        <h2>Main Page</h2>
        <br />
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