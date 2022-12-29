import { useState } from "react";

type CartPaginationProps = {
  countItemsPerPageCart: number;
  cartProductsCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CartPagination({ countItemsPerPageCart, cartProductsCount, currentPage, setCurrentPage }: CartPaginationProps) {

  const res = Math.ceil(cartProductsCount / countItemsPerPageCart);
  const nextPage = () => setCurrentPage(currentPage => currentPage < res ? currentPage + 1 : res);
  const prevPage = () => setCurrentPage(currentPage => currentPage >= 2 ? currentPage - 1 : currentPage);

  return (
    <div className="cart__pagination">
      <span>Page: </span>
      <button className="btn" onClick={prevPage}> &lt; </button>
      <span className="cart__page-count">{currentPage} of {res}</span>
      <button className="btn" onClick={nextPage}> &gt; </button>
    </div>
  )
}