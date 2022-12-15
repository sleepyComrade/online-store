import React, { useState } from "react";

export function Found() {
  const [found, setFound] = useState(0);
  return (
    <p className="cards-nav__found">Found: {found}</p>
  );
}