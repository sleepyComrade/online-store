import React from "react";
import grid from '../../assets/svg/grid.svg'
import stack from '../../assets/svg/view-stacked.svg'

export function ViewSwitcher() {
  return (
    <div className="cards-nav__switcher-wrap">
      <img className="cards-nav__grid-icon cards-nav__switcher-icon-active" src={grid} alt="grid icon" />
      <img className="cards-nav__stack-icon cards-nav__switcher-icon-inactive" src={stack} alt="stacked view icon" />
    </div>
  );
}