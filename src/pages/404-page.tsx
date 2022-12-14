import React from "react";

export default function ProductPage() {
  return (
    <>
      <header></header>
      <main>
      <h1 style={{ textAlign: 'center' }}>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">
        Go to main page
      </Link>
      </main>
      <footer></footer>
    </>
  );
}