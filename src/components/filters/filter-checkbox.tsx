type FilterCheckboxProps = {
  filter: string;
  onStateChange: () => void;
  state: boolean;
}

export default function FilterCheckbox({ filter, onStateChange, state }: FilterCheckboxProps) {
  return (
    <div className="filter-checkbox">
      <input checked={state} onChange={onStateChange} className="visually-hidden filter-checkbox__input" type="checkbox" name={filter} id={filter} />
      <label className="filter-checkbox__label" htmlFor={filter}>{filter}</label>
      <p className="filter-checkbox__count">
        <span>0</span> / <span>5</span>
      </p>
    </div>
  )
}