type FilterCheckboxProps = {
  filter: string;
  onStateChange: () => void;
}

export default function FilterCheckbox({ filter, onStateChange }: FilterCheckboxProps) {
  return (
    <div className="filter-checkbox">
      <input onChange={onStateChange} className="visually-hidden filter-checkbox__input" type="checkbox" name={filter} id={filter} />
      <label className="filter-checkbox__label" htmlFor={filter}>{filter}</label>
      <p className="filter-checkbox__count">
        <span>0</span> / <span>5</span>
      </p>
    </div>
  )
}