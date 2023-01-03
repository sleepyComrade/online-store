import React, { useState } from "react";
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
}

// export function CardsBlock({
//   onSearchChange,
//   onSortChange,
//   total,
//   activeItems
// }: CardsBlockProps) {
//   const [style, setStyle] = useState(gridItem);
//   return (
//     <div className="cards-block">
//       <CardsNav
//         onSearchChange={onSearchChange}
//         total={total}
//         onSortChange={onSortChange}
//         onStyleChange={(view: string) => {
//           if (view === "grid") {
//             setStyle(gridItem);
//           } else setStyle(bigItem);
//         }}
//       ></CardsNav>
//       <CardsWrap
//         style={style}
//         activeItems={activeItems}
//       />

export function CardsBlock({ onSearchChange, onSortChange, total, products, onAddCartItem, onRemoveCartItem }: CardsBlockProps) {
  const [style, setStyle] = useState(gridItem);
  return (
    <div className="cards-block">
      <CardsNav 
        onSearchChange={onSearchChange}
        total={total}
        onSortChange={onSortChange}
        onStyleChange={(view: string) => {
        if (view === 'grid') {
          setStyle(gridItem);
        } else setStyle(bigItem);
      }}></CardsNav>
      <CardsWrap style={style} products={products}
        onAddCartItem={(productItem) => { onAddCartItem(productItem) }}
        onRemoveCartItem={(productItem) => { onRemoveCartItem(productItem) }}
        />
    </div>
  );
}
