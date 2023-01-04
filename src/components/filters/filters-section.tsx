import React from "react";
import FiltersButtons from "./filters-buttons";
import FiltersBlockCheckbox from "./filter-block-checkbox";
import FiltersBlockRange from "./../filters/filters-block-range";
import { Filters } from "../../const";
import { IProductData, IProductItem } from "../../interfaces";

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
  onStockChange: (data: { min: string; max: string }) => void;
  productsItems: IProductData[];
  activeItems: IProductData[];
  minPriceValue: string;
  maxPriceValue: string;
  minStockValue: string;
  maxStockValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  products: Array<IProductItem>;
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
  onStockChange,
  productsItems,
  activeItems,
  minPriceValue,
  maxPriceValue,
  minStockValue,
  maxStockValue,
  onMinChange,
  onMaxChange
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
        activeItems={activeItems}
      />
      <FiltersBlockCheckbox
        onStateChange={onBrandStateChange}
        categoryState={brandState}
        onCategoryChange={onBrandChange}
        filterTitle={Filters.Brand}
        ProductsFilters={brands}
        productsItems={productsItems}
        prop={'brand'}
        activeItems={activeItems}
      />
      <FiltersBlockRange maxLimit={2000} onMinChange={onMinChange} onMaxChange={onMaxChange} minValue={minPriceValue} maxValue={maxPriceValue} onChange={onPriceChange} filterTitle={Filters.Price} />
      <FiltersBlockRange maxLimit={200} onMinChange={onMinChange} onMaxChange={onMaxChange} minValue={minStockValue} maxValue={maxStockValue} onChange={onStockChange} filterTitle={Filters.Stock} />
    </section>
  );
}
