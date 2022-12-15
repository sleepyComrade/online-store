import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FiltersSection from "./../components/filters-section";
import { IProductData } from "./../interfaces";



export default function MainPage() {
  const [productsItems, setProductsItems] = useState<Array<IProductData>>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProductsItems(data.products))
  }, []);
  
  return (
    <>
      <header></header>
      <main>
        <h2>Main Page</h2>
        <Link to="/basket">
          Go to basket page
        </Link>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>

        <FiltersSection  products={productsItems} />        
      </main>
      <footer></footer>
    </>
  );
}