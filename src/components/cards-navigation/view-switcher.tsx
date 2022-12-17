import React, { useState } from "react";
import grid from '../../assets/svg/grid.svg';
import stack from '../../assets/svg/view-stacked.svg';

export function ViewSwitcher() {
  const iconsClassNames = {
    grid: {
      active: 'cards-nav__grid-icon cards-nav__switcher-icon-active',
      inactive: 'cards-nav__grid-icon cards-nav__switcher-icon-inactive'
    },
    stack: {
      active: 'cards-nav__stack-icon cards-nav__switcher-icon-active',
      inactive: 'cards-nav__stack-icon cards-nav__switcher-icon-inactive'
    }
  }
  const [gridStyle, setGridStyle] = useState(iconsClassNames.grid.active);
  const [stackStyle, setStackStyle] = useState(iconsClassNames.stack.inactive);

  const handleGridClick = () => {
    if (gridStyle === iconsClassNames.grid.inactive) {
      setGridStyle(iconsClassNames.grid.active);
      setStackStyle(iconsClassNames.stack.inactive);
    };
  }

  const handleStackClick = () => {
    if (stackStyle === iconsClassNames.stack.inactive) {
      setStackStyle(iconsClassNames.stack.active);
      setGridStyle(iconsClassNames.grid.inactive);
    };
  }
  return (
    <div className="cards-nav__switcher-wrap">
      <img className={gridStyle} src={grid} alt="grid icon" onClick={handleGridClick} />
      <img className={stackStyle} src={stack} alt="stacked view icon" onClick={handleStackClick} />
    </div>
  );
}