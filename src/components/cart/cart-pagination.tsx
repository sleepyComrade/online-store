type CartPaginationProps = {
  countItemsPerPageCart: number;
  cartProductsCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CartPagination({ countItemsPerPageCart, cartProductsCount, currentPage, setCurrentPage }: CartPaginationProps) {

  const defaultNumberPage = 1;
  const numberCurrentPage = Math.ceil(cartProductsCount / countItemsPerPageCart);
  const nextPage = () => setCurrentPage(currentPage => currentPage < numberCurrentPage ? currentPage + 1 : numberCurrentPage);
  const prevPage = () => setCurrentPage(currentPage => currentPage >= 2 ? currentPage - 1 : currentPage);

  const numberTotalPage = numberCurrentPage > 0 ? numberCurrentPage : defaultNumberPage;

  return (
    <div className="cart__pagination">
      <span>Page: </span>
      <button className="btn" onClick={prevPage}> &lt; </button>
      <span className="cart__page-count">{currentPage} of {numberTotalPage}</span>
      <button className="btn" onClick={nextPage}> &gt; </button>
    </div>
  )
}