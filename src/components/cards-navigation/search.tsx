import React, { useState } from "react";
import close from '../../assets/svg/close-icon.svg'

export function Search() {
  const imgClassNames = {
    active: 'cards-nav__img',
    inactive: 'cards-nav__img cards-nav__img-inactive'
  }
  const [value, setValue] = useState('');
  const [imgClassName, setImgClassName] = useState(imgClassNames.inactive);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value);
    if (e.target.value) {
      setImgClassName(imgClassNames.active);
    } else setImgClassName(imgClassNames.inactive);
  }

  const handleClick = () => {
    setValue('');
    setImgClassName(imgClassNames.inactive);
  }
  return (
    <div className="cards-nav__search-wrap">
      <input className="cards-nav__input" type="text" value={value} placeholder="Search product" onChange={handleChange} />
      <img className={imgClassName} src={close} alt="close icon" onClick={handleClick} />
    </div>
  );
}