import React from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { gridItem, bigItem } from "../../const";
import { IProductItem } from "../../interfaces";

type CardsBlockProps = {
  onSearchChange: (value: string) => void;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  total: number;
  products: Array<IProductItem>;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
  search: string;
  sort: string;
  style: string;
  onStyleChange: (view: string) => void;
}

export function CardsBlock({ onSearchChange, onSortChange, total, products, onAddCartItem, onRemoveCartItem, search, sort, style, onStyleChange }: CardsBlockProps) {
  return (
    <div className="cards-block">
      <CardsNav 
        onSearchChange={onSearchChange}
        total={total}
        search={search}
        sort={sort}
        style={style}
        onSortChange={onSortChange}
        onStyleChange={onStyleChange}
      ></CardsNav>
      <CardsWrap style={style === 'grid' ? gridItem : bigItem} products={products}
        onAddCartItem={(productItem) => { onAddCartItem(productItem) }}
        onRemoveCartItem={(productItem) => { onRemoveCartItem(productItem) }}
        />
    </div>
  );
}
