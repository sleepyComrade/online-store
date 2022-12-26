type CartPaginationProps = {
  countItemsPerPageCart: number;
  cartProductsCount: number;
}

export default function CartPagination({countItemsPerPageCart, cartProductsCount}: CartPaginationProps) {
  const res = Math.ceil(cartProductsCount / countItemsPerPageCart);
    return (
        <div className="cart__pagination">
          <span>Page: </span>
          <button className="btn"> &lt; </button>
          <span className="cart__page-count">1 of {res}</span>
          <button className="btn"> &gt; </button>
        </div>
    )
}