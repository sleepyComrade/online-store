import React from "react";

export function Modal(props: {open: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>, children: React.ReactNode}) {
  return (
    <div onClick={() => props.setState(false)} className={props.open ? 'modal-wrap modal-wrap_open' : 'modal-wrap'}>
      <div onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
