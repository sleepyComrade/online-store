import { useEffect, useState } from "react";
import FiltersButtons from "./filters-buttons";
import FiltersBlockCheckbox from "./filter-block-checkbox";
import FiltersBlockRange from "./../filters/filters-block-range";
import { Filters } from "../../const";
import { IProductData } from "../../interfaces";

type FilterSectionProps = {
  products: Array<IProductData>;
  onCategoryChange: (data: string[]) => void;
}

export default function FiltersSection({ products, onCategoryChange }: FilterSectionProps) {
  const [categories, setCategories] = useState<Array<string>>([]);
  const [categoryState, setCategoryState] = useState<Array<boolean>>([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => {
      setCategories(categories);
      setCategoryState(new Array(categories.length).fill(false));
    });
  }, []); 

  const brands: Array<string> = [];
  for (let product of products) {
    if (!brands.includes(product.brand)) brands.push(product.brand);
  }

  return (
    <section className="filters">
      <FiltersButtons />
      <FiltersBlockCheckbox onStateChange={(data: boolean[]) => {
        setCategoryState(data)
      }} categoryState={categoryState} onCategoryChange={onCategoryChange} filterTitle={Filters.Category} ProductsFilters={categories} />
      <FiltersBlockCheckbox onStateChange={(data: boolean[]) => {
        setCategoryState(data)
      }} categoryState={categoryState} onCategoryChange={onCategoryChange} filterTitle={Filters.Brand} ProductsFilters={brands} />
      <FiltersBlockRange filterTitle={Filters.Price} />
      <FiltersBlockRange filterTitle={Filters.Stock} />
    </section>
  )
}