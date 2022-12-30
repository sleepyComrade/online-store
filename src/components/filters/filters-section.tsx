import { useEffect, useState } from "react";
import FiltersButtons from "./filters-buttons";
import FiltersBlockCheckbox from "./filter-block-checkbox";
import FiltersBlockRange from "./../filters/filters-block-range";
import { Filters } from "../../const";
import { IProductData } from "../../interfaces";

type FilterSectionProps = {
  brands: Array<string>;
  categories: Array<string>;
  brandState: boolean[];
  categoryState: boolean[];
  onCategoryChange: (data: string[]) => void;
  onBrandChange: (data: string[]) => void;
  onStateChange: (data: boolean[]) => void;
  onBrandStateChange: (data: boolean[]) => void;
  onPriceChange: (data: { min: string; max: string }) => void;
  productsItems: IProductData[];
};

export default function FiltersSection({
  brands,
  categories,
  categoryState,
  brandState,
  onCategoryChange,
  onBrandChange,
  onBrandStateChange,
  onStateChange,
  onPriceChange,
  productsItems,
}: FilterSectionProps) {
  return (
    <section className="filters">
      <FiltersButtons />
      <FiltersBlockCheckbox
        onStateChange={onStateChange}
        categoryState={categoryState}
        onCategoryChange={onCategoryChange}
        filterTitle={Filters.Category}
        ProductsFilters={categories}
        productsItems={productsItems}
        prop={'category'}
      />
      <FiltersBlockCheckbox
        onStateChange={onBrandStateChange}
        categoryState={brandState}
        onCategoryChange={onBrandChange}
        filterTitle={Filters.Brand}
        ProductsFilters={brands}
        productsItems={productsItems}
        prop={'brand'}
      />
      <FiltersBlockRange onChange={onPriceChange} filterTitle={Filters.Price} />
      <FiltersBlockRange onChange={onPriceChange} filterTitle={Filters.Stock} />
    </section>
  );
}
