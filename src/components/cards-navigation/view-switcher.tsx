import React, { useState } from "react";
import grid from '../../assets/svg/grid.svg';
import square from '../../assets/svg/square.svg';

type ViewSwitcherProps = {
  onStyleChange: (view:string) => void;
  style: string;
}

export function ViewSwitcher({ onStyleChange, style }: ViewSwitcherProps) {
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
  const [gridStyle, setGridStyle] = useState(style === 'grid' ? iconsClassNames.grid.active : iconsClassNames.grid.inactive);
  const [stackStyle, setStackStyle] = useState(style === 'grid' ? iconsClassNames.stack.inactive : iconsClassNames.stack.active);

  const handleGridClick = () => {
    if (gridStyle === iconsClassNames.grid.inactive) {
      setGridStyle(iconsClassNames.grid.active);
      setStackStyle(iconsClassNames.stack.inactive);
      onStyleChange('grid');
    }
  }

  const handleStackClick = () => {
    if (stackStyle === iconsClassNames.stack.inactive) {
      setStackStyle(iconsClassNames.stack.active);
      setGridStyle(iconsClassNames.grid.inactive);
      onStyleChange('stack');
    }
  }
  return (
    <div className="cards-nav__switcher-wrap">
      <img className={gridStyle} src={grid} alt="grid icon" onClick={handleGridClick} />
      <img className={stackStyle} src={square} alt="stacked view icon" onClick={handleStackClick} />
    </div>
  );
}