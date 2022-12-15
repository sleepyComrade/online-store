import React from "react";
import FiltersButtons from "./filters-buttons";
import FiltersBlockCheckbox from "./filter-block-checkbox";
import FiltersBlockRange from "./../components/filters-block-range";
import { Filters } from "../const";

const ProductsCategory = ["smartphones", "laptops", "fragrances", "skincare", "groceries"];
const ProductsBrand  = ["Apple", "Samsung", "OPPO", "Huawei", "Microsoft Surface"];

export default function FiltersSection() {
    return (
        <section>
            <FiltersButtons />
            <FiltersBlockCheckbox filterTitle={Filters.Category} ProductsFilters={ProductsCategory} />  
            <FiltersBlockCheckbox filterTitle={Filters.Brand} ProductsFilters={ProductsBrand}/>  
            <FiltersBlockRange filterTitle={Filters.Price} />
            <FiltersBlockRange filterTitle={Filters.Stock} />
        </section>
    )
}