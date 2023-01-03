import { useEffect, useState } from "react";
import FiltersButtons from "./filters-buttons";
import FiltersBlockCheckbox from "./filter-block-checkbox";
import FiltersBlockRange from "./../filters/filters-block-range";
import { Filters } from "../../const";
import { IProductData } from "../../interfaces";

type FilterSectionProps = {
  products: Array<{ data: IProductData, counter: number }>;
}

export default function FiltersSection({ products }: FilterSectionProps) {

  const [categories, setCategories] = useState<Array<string>>([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => setCategories(categories));
  }, []); 

  const brands: Array<string> = [];
  for (let product of products) {
    if (!brands.includes(product.data.brand)) brands.push(product.data.brand);
  }

  return (
    <section className="filters">
      <FiltersButtons />
      <FiltersBlockCheckbox filterTitle={Filters.Category} ProductsFilters={categories} />
      <FiltersBlockCheckbox filterTitle={Filters.Brand} ProductsFilters={brands} />
      <FiltersBlockRange filterTitle={Filters.Price} />
      <FiltersBlockRange filterTitle={Filters.Stock} />
    </section>
  )
}