import { useEffect, useState } from "react";
import FiltersButtons from "./filters-buttons";
import FiltersBlockCheckbox from "./filter-block-checkbox";
import FiltersBlockRange from "./../filters/filters-block-range";
import { Filters } from "../../const";

type FilterSectionProps = {
  brands: Array<string>;
  brandState: boolean[];
  onCategoryChange: (data: string[]) => void;
  onBrandChange: (data: string[]) => void;
  onBrandStateChange: (data: boolean[]) => void;
}

export default function FiltersSection({ brands, brandState, onCategoryChange, onBrandChange, onBrandStateChange }: FilterSectionProps) {
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

  return (
    <section className="filters">
      <FiltersButtons />
      <FiltersBlockCheckbox onStateChange={(data: boolean[]) => {
        setCategoryState(data)
      }} categoryState={categoryState} onCategoryChange={onCategoryChange} filterTitle={Filters.Category} ProductsFilters={categories} />
      <FiltersBlockCheckbox onStateChange={onBrandStateChange} categoryState={brandState} onCategoryChange={onBrandChange} filterTitle={Filters.Brand} ProductsFilters={brands} />
      <FiltersBlockRange filterTitle={Filters.Price} />
      <FiltersBlockRange filterTitle={Filters.Stock} />
    </section>
  )
}