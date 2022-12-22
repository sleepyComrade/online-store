import React from "react";
import { IProductData } from "../../interfaces";

export function CardItem(props: { product: IProductData}) {
  return (
    <div className="card-item">
      <div className="card-item__image" style={{backgroundImage: `url(${props.product.images[0]})`}}></div>
      <h5 className="card-item__title">{props.product.title}</h5>
      <h4 className="card-item__price">Price: {props.product.price}$</h4>
    </div>
  );
}