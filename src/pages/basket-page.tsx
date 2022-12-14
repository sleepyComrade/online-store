import React from "react";
import { Link } from "react-router-dom";

export default function BasketPage() {
  return (
    <>
      <header></header>
      <main>
        <h2>Basket Page</h2>
        <Link to="/">
          Go to main page
        </Link>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>
      </main>
      <footer></footer>
    </>
  );
}