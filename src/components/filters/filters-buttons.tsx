import React, { useState } from "react";

type FiltersButtonsProps = {
  onReset: () => void;
}

export default function FiltersButtons({onReset}: FiltersButtonsProps) {
  const [copyText, setCopyText] = useState('Copy Link');
  return (
    <div className="filters__buttons">
      <button onClick={onReset} className="filters__button btn">Reset Filters</button>
      <button onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setCopyText('Copied!');
        setTimeout(() => {
          setCopyText('Copy Link');
        }, 1000);
      }} className="filters__button btn">{copyText}</button>
    </div>
  )
}