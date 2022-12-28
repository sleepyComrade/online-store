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
  const [total, setTotal] = useState(0);
  return (
    <div className="cards-block">
        <CardsNav total={total} onSortChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSort({sorted: e.target.value});
        }} onStyleChange={(view: string) => {
          if (view === 'grid') {
            setStyle(gridItem);
          } else setStyle(bigItem);
        }}></CardsNav>
        <CardsWrap onTotalChange={(length: number) => {
          setTotal(length);
        }} sort={sort} activeBrands={activeBrands} activeCategories={activeCategories} style={style} products={products} />
    </div>
  );
}
