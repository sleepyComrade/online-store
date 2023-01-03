import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
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