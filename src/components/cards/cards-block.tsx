import React from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";

export function CardsBlock(props: { products: Array<IProductData>}) {
  return (
    <div className="cards-block">
        <CardsNav></CardsNav>
        <CardsWrap products={props.products} />
    </div>
  );
}
