type CartPaginationProps = {
  countItemsPerPageCart: number;
  productsCount: number;
}

export default function CartPagination({countItemsPerPageCart, productsCount}: CartPaginationProps) {
  const res = Math.ceil(productsCount / countItemsPerPageCart);
    return (
        <div className="cart__pagination">
          <span>Page: </span>
          <button className="btn"> &lt; </button>
          <span className="cart__page-count">{res}</span>
          <button className="btn"> &gt; </button>
        </div>
    )
}