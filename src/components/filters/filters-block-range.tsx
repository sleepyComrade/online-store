import FilterRange from "./filter-range";

type FiltersBlockCheckboxProps = {
  filterTitle: string;
  onChange: (data: {min: string, max: string}) => void;
}

export default function FiltersBlockRange({ filterTitle, onChange }: FiltersBlockCheckboxProps) {
  return (
    <div className="filters__block filters__block--range">
      <h3 className="filters__block-title">{filterTitle}</h3>
      <div className="filters__range-wrapper">
        <FilterRange onChange={onChange} />
      </div>
    </div>
  )
}