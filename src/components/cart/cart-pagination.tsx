type CartPaginationProps = {
  countItemsPerPageCart: number;
  cartProductsCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CartPagination({ countItemsPerPageCart, cartProductsCount, currentPage, setCurrentPage }: CartPaginationProps) {

  const defaultNumberPage = 1;
  const numberCurrentPage = Math.ceil(cartProductsCount / countItemsPerPageCart);
  const nextPage = () => setCurrentPage(currentPage < numberCurrentPage ? currentPage + 1 : numberCurrentPage);
  const prevPage = () => setCurrentPage(currentPage >= 2 ? currentPage - 1 : currentPage);

  const numberTotalPage = numberCurrentPage > 0 ? numberCurrentPage : defaultNumberPage;
  //если удаляем с последней страницы единственный товар, перенаправляем на предыдущую страницу
  if(currentPage > numberTotalPage) setCurrentPage(numberTotalPage);
  
  return (
    <div className="cart__pagination">
      <span>Page: </span>
      <button className="btn" onClick={prevPage}> &lt; </button>
      <span className="cart__page-count">{currentPage} of {numberTotalPage}</span>
      <button className="btn" onClick={nextPage}> &gt; </button>
    </div>
  )
}