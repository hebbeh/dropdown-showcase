import React, { ReactNode } from 'react';
import './Dropdown.css';

export interface DropdownProps {
  children: ReactNode;
}

export default function Dropdown({ children }: DropdownProps) {
  return <div>{children}</div>;
}

export interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return <div className="menu">{children}</div>;
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
