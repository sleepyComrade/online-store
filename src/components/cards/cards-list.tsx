import React from "react";
import { CardItem } from "./card-item";
import { IProductData, ICardStyle } from "../../interfaces";

type CardsListProps = {
  style: ICardStyle;
  activeItems: IProductData[];
};

export function CardList({ 
  style,
  activeItems
  }: CardsListProps) {
  return (
    <div className="cards-block__card-list">
      {!activeItems.length ?
       <h2 style={{textAlign: 'center', width: '100%'}}>No products found</h2> :
       activeItems.map(item => <CardItem style={style} product={item} key={item.id} />)}
    </div>
  );
}
