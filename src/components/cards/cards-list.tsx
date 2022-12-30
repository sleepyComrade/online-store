import React from "react";
import { CardItem } from "./card-item";
import { IProductData, ICardStyle } from "../../interfaces";

type CardsListProps = {
  products: Array<IProductData>;
  style: ICardStyle;
  sort: { sorted: string};
  onTotalChange: (length: number) => void;
  searched: string;
  priceRange: {min: string, max: string};
  queryCat: string[];
  queryBrand: string[];
};

export function CardList({ 
  products,
  style,
  sort,
  onTotalChange,
  searched,
  priceRange,
  queryCat,
  queryBrand
  }: CardsListProps) {
  const foo = () => {
    const sortInfo = sort.sorted.split('-');
    const filteredItems = products
    .filter(
      (product) =>
      queryCat.includes(product.category) || !queryCat.length
    )
    .filter(
      (product) =>
      queryBrand.includes(product.brand) || !queryBrand.length
    )
    .filter(
      (product) =>
      product.price >= +priceRange.min && product.price <= +priceRange.max
    )
    .filter(
      (product) =>
      product.brand.toLowerCase().includes(searched.toLowerCase()) ||
      product.title.toLowerCase().includes(searched.toLowerCase()) ||
      product.category.toLowerCase().includes(searched.toLowerCase())
    )
    .map((product) => (
      <CardItem style={style} product={product} key={product.id} />
    ));
    let sortedItems = filteredItems;
    if (sortInfo.length > 1) {
      sortedItems = sortInfo[0] === 'low' ?
      filteredItems.sort((a, b) => a.props.product[sortInfo[1]] - b.props.product[sortInfo[1]]) :
      filteredItems.sort((a, b) => a.props.product[sortInfo[1]] - b.props.product[sortInfo[1]]).reverse();
    }
    onTotalChange(sortedItems.length);
    return sortedItems;
  }
  return (
    <div className="cards-block__card-list">
      {!foo().length ? <h2 style={{textAlign: 'center', width: '100%'}}>No products found</h2> : foo()}
    </div>
  );
}
