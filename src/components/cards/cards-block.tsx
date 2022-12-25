import React, { useState } from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";
import { gridItem, bigItem } from "../../const";

type CardBlockProps = {
  products: Array<IProductData>;
  activeCategories: string[];
}

export function CardsBlock({ products, activeCategories}: CardBlockProps) {
  const [style, setStyle] = useState(gridItem);
  return (
    <div className="cards-block">
        <CardsNav onStyleChange={(view: string) => {
          if (view === 'grid') {
            setStyle(gridItem);
          } else setStyle(bigItem);
        }}></CardsNav>
        <CardsWrap activeCategories={activeCategories} style={style} products={products} />
    </div>
  );
}
