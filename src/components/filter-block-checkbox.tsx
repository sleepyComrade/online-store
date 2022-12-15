import React from "react";
import FilterCheckbox from "./filter-checkbox";

type FiltersBlockCheckboxProps = {
    filterTitle: string;
    ProductsFilters: Array<string>;
}

export default function FiltersBlockCheckbox({filterTitle, ProductsFilters} : FiltersBlockCheckboxProps) {  
    return (
        <section>
          <h3>{filterTitle}</h3>
          {
            ProductsFilters.map((item) => <FilterCheckbox filter={item} />)
          }
         
        </section>
    )
}