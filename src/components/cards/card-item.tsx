import React, { useState } from "react";
import { IProductData } from "../../interfaces";
import star from "../../assets/svg/star.svg";

export function CardItem(props: { product: IProductData }) {
  const title = props.product.title.charAt(0).toUpperCase() + props.product.title.slice(1);
  const originalPrice = ((props.product.price / (100 - props.product.discountPercentage)) * 100).toFixed(2);
  return (
    <div className="card-item">
      <div
        className="card-item__image"
        style={{ backgroundImage: `url(${props.product.images[0]})` }}
      ></div>
      <div className="card-item__title-rate-wrap">
        <h4 title={title} className="card-item__title">{title}</h4>
        <div className="card-item__rate-wrap">
          <span>{props.product.rating.toFixed(2)}</span>
          <img className="card-item__star-icon" src={star} alt="star icon" />
        </div>
      </div>
      <div className="card-item__price-wrap">
        <h4 className="card-item__price">
          USD {props.product.price.toFixed(2)}
        </h4>
        {props.product.discountPercentage && (
          <p className="card-item__discount">
            <span className="card-item__origin-price">USD {originalPrice}</span>
            &nbsp;({props.product.discountPercentage}% off)
          </p>
        )}
      </div>
      <button className="card-item__btn">Add to cart</button>
    </div>
  );
}
