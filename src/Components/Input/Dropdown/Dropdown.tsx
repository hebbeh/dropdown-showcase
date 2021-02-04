import React, { ReactNode, RefObject, useEffect, useRef } from 'react';
import './Dropdown.css';

export interface DropdownProps {
  children: ReactNode;
}

export default function Dropdown({ children }: DropdownProps) {
  return <div>{children}</div>;
}

export interface MenuProps {
  children: ReactNode;
  outsideClick(): void;
}

function Menu({ children, outsideClick }: MenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log('setFirstMenuVisible');
      outsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <div className="menu" ref={ref}>
      {children}
    </div>
  );
}

export interface ItemProps {
  children: ReactNode;
  tabIndex?: number;
  onChange(): void;
}

function Item({ children, tabIndex, onChange }: ItemProps) {
  return (
    <div className="item" onClick={() => onChange()}>
      <div className="itemContent">{children}</div>
    </div>
  );
}

Dropdown.Item = Item;
Dropdown.Menu = Menu;
