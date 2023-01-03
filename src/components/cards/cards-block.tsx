import React, { useState } from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";
import { gridItem, bigItem } from "../../const";

type CardBlockProps = {
  onSearchChange: (value: string) => void;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  total: number;
  activeItems: IProductData[];
};

export function CardsBlock({
  onSearchChange,
  onSortChange,
  total,
  activeItems
}: CardBlockProps) {
  const [style, setStyle] = useState(gridItem);
  return (
    <div className="cards-block">
      <CardsNav
        onSearchChange={onSearchChange}
        total={total}
        onSortChange={onSortChange}
        onStyleChange={(view: string) => {
          if (view === "grid") {
            setStyle(gridItem);
          } else setStyle(bigItem);
        }}
      ></CardsNav>
      <CardsWrap
        style={style}
        activeItems={activeItems}
      />
    </div>
  );
}
