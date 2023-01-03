import React from "react";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <>
      <main>
        <h2>Product Page</h2>
        <Link to="/">
          Go to main page
        </Link>
        <br />
        <Link to="/cart">
          Go to cart page
        </Link>
      </main>
      <footer></footer>
    </>
  );
}