import React, { useState } from "react";
import { IProductData, ICardStyle } from "../../interfaces";
import star from "../../assets/svg/star.svg";

type CardItemProps = {
  product: IProductData;
  style: ICardStyle;
  onAdd: ()  => void;
}

export function CardItem({ product, style, onAdd }: CardItemProps) {
  const [btnContent, setBtnContent] = useState('Add to cart');
  const [btnColor, setBtnColor] = useState('green')
  const addRemoveItem = () => {
    setBtnContent(btnContent === 'Add to cart' ? 'Remove from cart' : 'Add to cart');
    setBtnColor(btnContent === 'Add to cart' ? 'crimson' : 'green');
  }
  const title = product.title.charAt(0).toUpperCase() + product.title.slice(1);
  const originalPrice = ((product.price / (100 - product.discountPercentage)) * 100).toFixed(2);
  return (
    <div className={style.item}>
      <div
        className={style.image}
        style={{ backgroundImage: `url(${product.images[0]})` }}
      ></div>
      <div>
      <div className={style.titleWrap}>
        <h4 title={title} className={style.title}>{title}</h4>
        <div className={style.rateWrap}>
          <span>{product.rating.toFixed(2)}</span>
          <img className={style.star} src={star} alt="star icon" />
        </div>
      </div>
      <div className={style.priceWrap}>
        <h4 className={style.price}>
          USD {product.price.toFixed(2)}
        </h4>
        {product.discountPercentage && (
          <p className={style.discount}>
            <span className={style.originPrice}>USD {originalPrice}</span>
            &nbsp;({product.discountPercentage}% off)
          </p>
        )}
      </div>
      <button style={{background: `${btnColor}`}} onClick={addRemoveItem} className={style.button}>{btnContent}</button>
      </div>
    </div>
  );
}
