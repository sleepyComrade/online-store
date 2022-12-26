import FiltersSection from "./../components/filters/filters-section";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IProductData } from "./../interfaces";
import { CardsBlock } from "../components/cards/cards-block";

export default function MainPage() {
  const [productsItems, setProductsItems] = useState<Array<IProductData>>([]);
  const [activeCategories, setActiveCategories] = useState<Array<string>>([]);
  const [brands, setBrands] = useState<Array<string>>([]);
  const [activeBrands, setActiveBrands] = useState<Array<string>>([]);
  const [brandState, setBrandState] = useState<Array<boolean>>([]);
  const [searchParams, setSearchParams] = useSearchParams({categories: activeCategories, brands: []});
  
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        setProductsItems(data.products);
        const brands: Array<string> = [];
        for (let product of data.products) {
          if (!brands.includes(product.brand)) brands.push(product.brand);
        }
        setBrands(brands);
        setBrandState(new Array(brands.length).fill(false));
      })
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
          <FiltersSection onBrandStateChange={(data: boolean[]) => {
            setBrandState(data);
          }} onBrandChange={(data: string[]) => {
            setActiveBrands(data);
          }} onCategoryChange={(data: string[]) => {
            setActiveCategories(data);
          }} brandState={brandState} brands={brands} />
          <CardsBlock activeBrands={activeBrands} activeCategories={activeCategories} products={productsItems} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}