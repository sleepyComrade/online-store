import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

export default function MainPage() {
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
      </main>
      <footer></footer>
    </>
  );
}