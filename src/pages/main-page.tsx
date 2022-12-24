import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FiltersSection from "./../components/filters-section";
import { IProductData } from "./../interfaces";
import { Header } from "../components/header/header";
import { CardsBlock } from "../components/cards/cards-block";

export default function MainPage() {
  const [productsItems, setProductsItems] = useState<Array<IProductData>>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => setProductsItems(data.products))
  }, []);
  
  return (
    <>
      <Header></Header>
      <main>
        <h2>Main Page</h2>
        <Link to="/basket">
          Go to basket page
        </Link>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>
        <div className="main-page__content-wrap">
          <FiltersSection  products={productsItems} />
          <CardsBlock products={productsItems} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}