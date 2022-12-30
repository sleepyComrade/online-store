import React, { useState } from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";
import { gridItem, bigItem } from "../../const";

type CardBlockProps = {
  products: Array<IProductData>;
  priceRange: {min: string, max: string};
  queryCat: string[];
  queryBrand: string[];
}

export function CardsBlock({ products, priceRange, queryCat, queryBrand }: CardBlockProps) {
  const [style, setStyle] = useState(gridItem);
  const [sort, setSort] = useState({sorted: ''});
  const [total, setTotal] = useState(0);
  const [searched, setSearched] = useState('');
  return (
    <div className="cards-block">
        <CardsNav onSearchChange={(value: string) => {
          setSearched(value);
        }} total={total} onSortChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSort({sorted: e.target.value});
        }} onStyleChange={(view: string) => {
          if (view === 'grid') {
            setStyle(gridItem);
          } else setStyle(bigItem);
        }}></CardsNav>
        <CardsWrap onTotalChange={(length: number) => {
          setTotal(length);
        }}
        queryBrand={queryBrand}
        queryCat={queryCat} 
        priceRange={priceRange} 
        searched={searched} 
        sort={sort} 
        style={style} 
        products={products}
        />
    </div>
  );
}
