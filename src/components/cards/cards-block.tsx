import React, { useState } from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";
import { gridItem, bigItem } from "../../const";

type CardBlockProps = {
  products: Array<IProductData>;
  activeCategories: string[];
  activeBrands: string[];
}

export function CardsBlock({ products, activeCategories, activeBrands}: CardBlockProps) {
  const [style, setStyle] = useState(gridItem);
  const [sort, setSort] = useState({sorted: ''});
  return (
    <div className="cards-block">
        <CardsNav onSortChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          console.log(e.target.value);
          setSort({sorted: e.target.value});
        }} onStyleChange={(view: string) => {
          if (view === 'grid') {
            setStyle(gridItem);
          } else setStyle(bigItem);
        }}></CardsNav>
        <CardsWrap sort={sort} activeBrands={activeBrands} activeCategories={activeCategories} style={style} products={products} />
    </div>
  );
}
