import React, { useState } from "react";
import close from '../../assets/svg/close-icon.svg'

type SearchProps = {
  onSearchChange: (value: string) => void;
  search: string;
}

export function Search({onSearchChange, search}: SearchProps) {
  const imgClassNames = {
    active: 'cards-nav__img',
    inactive: 'cards-nav__img cards-nav__img-inactive'
  }
  const [imgClassName, setImgClassName] = useState(imgClassNames.inactive);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setImgClassName(imgClassNames.active);
    } else setImgClassName(imgClassNames.inactive);
    onSearchChange(e.target.value);
  }

  const handleClick = () => {
    setImgClassName(imgClassNames.inactive);
    onSearchChange('');
  }
  return (
    <div className="cards-nav__search-wrap">
      <input className="cards-nav__input" type="text" value={search} placeholder="Search product" onChange={handleChange} />
      <img className={imgClassName} src={close} alt="close icon" onClick={handleClick} />
    </div>
  );
}