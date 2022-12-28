import React from "react";

export function Found({total}: {total: number}) {
  return (
    <p className="cards-nav__found">Found: {total}</p>
  );
}