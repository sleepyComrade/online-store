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
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [categoryState, setCategoryState] = useState<Array<boolean>>([]);
  const [priceRange, setPriceRange] = useState({min: '0', max: '2000'});

  const queryCat = searchParams.getAll('cat') || [];
  const queryBrand = searchParams.getAll('brand') || [];

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => {
      setCategories(categories);
      setCategoryState(categories.map((cat: string) => queryCat.includes(cat)));
      setActiveCategories(categories.filter((cat: string) => queryCat.includes(cat)));
    });
  }, []);
  
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
        setBrandState(brands.map((brand: string) => queryBrand.includes(brand)));
        setActiveBrands(brands.filter((brand: string) => queryBrand.includes(brand)));
      })
  }, []);
  
  return (
    <>
      <main>
        <div className="main-container">
          {/* <h2>Main Page</h2>
          <br />
          <Link to="/product/01">
            Go to product page
          </Link> */}
          <div className="main-page__content-wrap">
            <FiltersSection onPriceChange={(data: {min: string, max: string}) => {
              setPriceRange(data);
            }} onStateChange={(data: boolean[]) => {
              setCategoryState(data)
            }} onBrandStateChange={(data: boolean[]) => {
              setBrandState(data);
            }} onBrandChange={(data: string[]) => {
              setActiveBrands(data);
              setSearchParams({brand: data, cat: activeCategories});
            }} onCategoryChange={(data: string[]) => {
              setActiveCategories(data);
              setSearchParams({brand: activeBrands, cat: data});
            }} productsItems={productsItems} categoryState={categoryState} brandState={brandState} categories={categories} brands={brands} />
            <CardsBlock queryBrand={queryBrand} queryCat={queryCat} priceRange={priceRange} products={productsItems} />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}