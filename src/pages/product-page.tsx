import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

export default function ProductPage() {
  return (
    <>
      <header></header>
      <main>
        <h2>Product Page</h2>
        <Link to="/">
          Go to main page
        </Link>
        <br />
        <Link to="/basket">
          Go to basket page
        </Link>
      </main>
      <footer></footer>
    </>
  );
}