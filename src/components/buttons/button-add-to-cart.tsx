import { ICardStyle, IProductItem } from "../../interfaces";

type ButtonAddToCartProps = {
    product: IProductItem;
    style: string;
    onAddCartItem: (productItem: IProductItem) => void;
    onRemoveCartItem: (productItem: IProductItem) => void;
}

export default function ButtonAddToCart({product, style, onAddCartItem, onRemoveCartItem }: ButtonAddToCartProps) {
    const btnContent = product.counter > 0 ? 'Remove from cart' : 'Add to cart';
    const btnColor = product.counter > 0 ? 'crimson' : '#48647f';

    return (
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
        className={style}>{btnContent}
      </button>
    )
}