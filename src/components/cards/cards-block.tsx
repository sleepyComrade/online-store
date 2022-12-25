import React, { useState } from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";
import { gridItem, bigItem } from "../../const";

export function CardsBlock(props: { products: Array<IProductData>}) {
  const [style, setStyle] = useState(gridItem);
  return (
    <div className="cards-block">
        <CardsNav onStyleChange={(view: string) => {
          if (view === 'grid') {
            setStyle(gridItem);
          } else setStyle(bigItem);
        }}></CardsNav>
        <CardsWrap style={style} products={props.products} />
    </div>
  );
}
