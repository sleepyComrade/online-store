import { IProductData } from "../../interfaces"

type CartItemProps = {
  productInCart: IProductData;
  itemNumber: number;
  counter: number;
  onCounter: (a: number) => void;
}

export default function CartItem({ productInCart, itemNumber, counter,  onCounter}: CartItemProps) { 
  const maxCounter = productInCart.stock;

  const priceForAll = productInCart.price * counter;

  return (
    <li className="cart__item cart-item">
      <p className="cart-item__number"><span>{itemNumber}</span></p>
      <div className="cart-item__info">
        <div className="cart-item__image">
          <img src={productInCart.images[0]} alt={productInCart.title} />
        </div>
        <div className="cart-item__full-info">
          <p className="cart-item__title">{productInCart.title}</p>
          
          <p className="cart-item__desc">{productInCart.description}</p>
          <p className="cart-item__category"><span>Category: </span>{productInCart.category}</p>
          <p className="cart-brand"><span>Brand: </span>{productInCart.brand}</p>
          <p className="cart-item__rating"><span>Rating: </span>{productInCart.rating}</p>
          <p className="cart-item__discount"><span>Discount: </span>{productInCart.discountPercentage + "%"}</p>
        </div>
      </div>
      <div className="cart-item__price-block">
        <p className="cart-item__stock"><span>Stock: </span> {productInCart.stock}</p>
        <p className="cart-item__price-for-one"><span>Price for one: </span>${productInCart.price}</p>
        <div className="cart-item__counter">
          <button className="btn cart-item__counter-button" onClick={() => onCounter(1)} disabled={counter >= maxCounter}>
            +
          </button>
          <span className="cart-item__counter-span">{counter}</span>
          <button className="btn cart-item__counter-button" onClick={() => onCounter(-1)}>
           -
          </button>
        </div>
        <p className="cart-item__price-for-all"><span>Price for all: <br /></span>${new Intl.NumberFormat("en").format(priceForAll)}</p>
      </div>
    </li>
  )
}