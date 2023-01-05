import React from "react";
import { ICardStyle, IProductItem } from "../../interfaces";
import star from "../../assets/svg/star.svg";
import { Link } from "react-router-dom";

type CardItemProps = {
  product: IProductItem;
  style: ICardStyle;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
}

export function CardItem({ product, style, onAddCartItem, onRemoveCartItem }: CardItemProps) {
  const btnContent = product.counter > 0 ? 'Remove from cart' : 'Add to cart';
  const btnColor = product.counter > 0 ? 'crimson' : '#48647f';

  const title = product.data.title.charAt(0).toUpperCase() + product.data.title.slice(1);
  const originalPrice = ((product.data.price / (100 - product.data.discountPercentage)) * 100).toFixed(2);
  return (
    <div className={style.item}>
      <Link to={`/product/${product.data.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <div
          className={style.image}
          style={{ backgroundImage: `url(${product.data.images[0]})` }}
        ></div>
        <div>
          <div className={style.titleWrap}>
            <h4 title={title} className={style.title}>{title}</h4>
            <div className={style.rateWrap}>
              <span>{product.data.rating.toFixed(2)}</span>
              <img className={style.star} src={star} alt="star icon" />
            </div>
          </div>
          <div className={style.priceWrap}>
            <h4 className={style.price}>
              USD {product.data.price.toFixed(2)}
            </h4>
            {product.data.discountPercentage && (
              <p className={style.discount}>
                <span className={style.originPrice}>USD {originalPrice}</span>
                &nbsp;({product.data.discountPercentage}% off)
              </p>
            )}
          </div>
        </div>
      </Link>
      <button style={{ background: `${btnColor}` }}
        onClick={
          () => {
            if (product.counter > 0) {
              onRemoveCartItem(product);
            } else {
              onAddCartItem(product);
            }
          }
        }
        className={style.button}>{btnContent}
      </button>
    </div >

  );
}
