import { IProductData } from "../../interfaces"

type CartItemProps = {
  productInCart: IProductData;
  itemNumber: number;
}

export default function CartItem({productInCart, itemNumber}: CartItemProps) {
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
          <p className="cart-item__rating">Rating: {productInCart.rating}</p>
          <p className="cart-item__discount">Discount: {productInCart.discountPercentage + "%"}</p>
        </div>
      </div>
      <div className="cart-item__counter">counter</div>
    </li>
  )
}