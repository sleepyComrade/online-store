import React, { useState } from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import star from "../../assets/svg/star.svg";

export function CardItem(props: { product: IProductData, style: ICardStyle }) {
  const [btnContent, setBtnContent] = useState('Add to cart');
  const [btnColor, setBtnColor] = useState('green')
  const addRemoveItem = () => {
    setBtnContent(btnContent === 'Add to cart' ? 'Remove from cart' : 'Add to cart');
    setBtnColor(btnContent === 'Add to cart' ? 'crimson' : 'green');
  }
  const title = props.product.title.charAt(0).toUpperCase() + props.product.title.slice(1);
  const originalPrice = ((props.product.price / (100 - props.product.discountPercentage)) * 100).toFixed(2);
  return (
    <div className={props.style.item}>
      <div
        className={props.style.image}
        style={{ backgroundImage: `url(${props.product.images[0]})` }}
      ></div>
      <div>
      <div className={props.style.titleWrap}>
        <h4 title={title} className={props.style.title}>{title}</h4>
        <div className={props.style.rateWrap}>
          <span>{props.product.rating.toFixed(2)}</span>
          <img className={props.style.star} src={star} alt="star icon" />
        </div>
      </div>
      <div className={props.style.priceWrap}>
        <h4 className={props.style.price}>
          USD {props.product.price.toFixed(2)}
        </h4>
        {props.product.discountPercentage && (
          <p className={props.style.discount}>
            <span className={props.style.originPrice}>USD {originalPrice}</span>
            &nbsp;({props.product.discountPercentage}% off)
          </p>
        )}
      </div>
      <button style={{background: `${btnColor}`}} onClick={addRemoveItem} className={props.style.button}>{btnContent}</button>
      </div>
    </div>
  );
}
