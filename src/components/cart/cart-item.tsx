import { IProductData } from "../../interfaces"

type CartItemProps = {
  productInCart: IProductData;
  itemNumber: number;
  counter: number;
  onCounter: (a: number) => void;
}

export default function CartItem({ productInCart, itemNumber, counter,  onCounter}: CartItemProps) {
  const minCounter = 1;
  const maxCounter = productInCart.stock;
  const productsCounter = counter <= minCounter ? minCounter : 
                          counter >= maxCounter ? maxCounter :
                          counter;

  const priceForAll = productInCart.price * productsCounter;

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
          <p className="cart-item__rating"><span>Rating: </span>{productInCart.rating}</p>
          <p className="cart-item__discount"><span>Discount: </span>{productInCart.discountPercentage + "%"}</p>
        </div>
      </div>
      <div className="cart-item__price-block">
        <p className="cart-item__stock"><span>Stock: </span> {productInCart.stock}</p>
        <p className="cart-item__price-for-one"><span>Price for one: </span>${productInCart.price}</p>
        <div className="cart-item__counter">
          <button className="btn cart-item__counter-button" onClick={() => onCounter(1)}>
            +
          </button>
          <span className="cart-item__counter-span">{productsCounter}</span>
          <button className="btn cart-item__counter-button" onClick={() => onCounter(-1)}>
           -
          </button>
        </div>
        <p className="cart-item__price-for-all"><span>Price for all: <br /></span>${new Intl.NumberFormat("en").format(priceForAll)}</p>
      </div>
    </li>
  )
}