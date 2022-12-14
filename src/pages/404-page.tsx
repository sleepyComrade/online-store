import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

export default function NotFoundPage() {
  return (
    <>
      <header></header>
      <main>
        <h2 style={{ textAlign: 'center' }}>
          404.
          <br />
          <h2>Page not found</h2>
        </h2>
        <Link to="/">
          Go to main page
        </Link>
      </main>
      <footer></footer>
    </>
  );
}