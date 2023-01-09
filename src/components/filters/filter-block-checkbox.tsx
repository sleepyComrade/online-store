import React from "react";
import FilterCheckbox from "./filter-checkbox";
import { IProductData } from "../../interfaces";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
  ProductsFilters: Array<string>;
  onCategoryChange: (data: string[]) => void;
  categoryState: boolean[];
  productsItems: IProductData[];
  prop: string;
  activeItems: IProductData[];
}

export default function FiltersBlockCheckbox({ filterTitle, ProductsFilters, onCategoryChange, categoryState, productsItems, prop, activeItems }: FiltersBlockCheckboxProps) {
  return (
    <div className="filters__block filters__block--checkbox">
      <h3 className="filters__block-title">{filterTitle}</h3>
      <div className="filters__checkbox-wrapper">
      { ProductsFilters.map((item, index) => <FilterCheckbox onStateChange={() => {
        categoryState[index] = !categoryState[index];
        const activeCat = ProductsFilters.filter((cat, i) => categoryState[i]);
        onCategoryChange(activeCat);
      }} activeQty={activeItems.filter(product => prop === 'category' ?
                                                  product.category === item :
                                                  prop === 'brand' ?
                                                  product.brand === item : false
      ).length} total={productsItems.filter(product => prop === 'category' ?
                                            product.category === item :
                                            prop === 'brand' ?
                                            product.brand === item : false
      ).length} state={categoryState[index]} key={index} filter={item} />) }
      </div>
    </div>
  )
}