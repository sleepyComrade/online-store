export function Sort() {
  return (
    <div className="cards-nav__sort-wrap">
      <select className="cards-nav__select" defaultValue={""}>
        <option value="" disabled>Sort by</option>
        <option value="low-price">Lowest price</option>
        <option value="high-price">Highest price</option>
        <option value="low-rate">Lowest rating</option>
        <option value="high-rate">Highest rating</option>
        <option value="big-disc">Biggest discount</option>
        <option value="small-disc">Smallest discount</option>
      </select>
    </div>
  );
}