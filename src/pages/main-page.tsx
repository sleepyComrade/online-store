import FiltersSection from "./../components/filters/filters-section";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IProductData } from "./../interfaces";
import { CardsBlock } from "../components/cards/cards-block";

export default function MainPage() {
  const [productsItems, setProductsItems] = useState<Array<IProductData>>([]);
  const [activeCategories, setActiveCategories] = useState<Array<string>>([]);
  const [searchParams, setSearchParams] = useSearchParams({categories: activeCategories, brands: []});
  
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => setProductsItems(data.products))
  }, []);
  
  return (
    <>
      <main>
        <h2>Main Page</h2>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>
        <div className="main-page__content-wrap">
          <FiltersSection onCategoryChange={(data: string[]) => {
            setActiveCategories(data);
          }} products={productsItems} />
          <CardsBlock activeCategories={activeCategories} products={productsItems} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}