import React from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  style: ICardStyle;
  activeItems: IProductData[];
};

export function CardsWrap({
  style,
  activeItems
}: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      <CardList
        style={style}
        activeItems={activeItems}
      />
    </div>
  );
}
