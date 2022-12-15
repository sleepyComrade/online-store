import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";

export default function ProductPage() {
  return (
    <>
      <Header></Header>
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