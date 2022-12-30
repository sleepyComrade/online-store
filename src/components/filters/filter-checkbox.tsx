type FilterCheckboxProps = {
  filter: string;
  onStateChange: () => void;
  state: boolean;
  total: number;
}

export default function FilterCheckbox({ filter, onStateChange, state, total }: FilterCheckboxProps) {
  return (
    <div className="filter-checkbox">
      <input checked={state} onChange={onStateChange} className="visually-hidden filter-checkbox__input" type="checkbox" name={filter} id={filter} />
      <label className="filter-checkbox__label" htmlFor={filter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</label>
      <p className="filter-checkbox__count">
        <span>0</span> / <span>{total}</span>
      </p>
    </div>
  )
}