import React, { useState } from "react";
import { CardsNav } from "../../components/cards-navigation/navigation";
import { CardsWrap } from "./cards-wrap";
import { IProductData } from "../../interfaces";

export function CardsBlock(props: { products: Array<IProductData>}) {
  const gridItem = {
    item: 'card-item',
    image: 'card-item__image',
    titleWrap: 'card-item__title-rate-wrap',
    title: 'card-item__title',
    rateWrap: 'card-item__rate-wrap',
    star: 'card-item__star-icon',
    priceWrap: 'card-item__price-wrap',
    price: 'card-item__price',
    discount: 'card-item__discount',
    originPrice: 'card-item__origin-price',
    button: 'card-item__btn'
  }
  const bigItem = {
    item: 'big-card-item',
    image: 'big-card-item__image',
    titleWrap: 'big-card-item__title-rate-wrap',
    title: 'big-card-item__title',
    rateWrap: 'big-card-item__rate-wrap',
    star: 'big-card-item__star-icon',
    priceWrap: 'big-card-item__price-wrap',
    price: 'big-card-item__price',
    discount: 'big-card-item__discount',
    originPrice: 'big-card-item__origin-price',
    button: 'big-card-item__btn'
  }
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
