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
}

function Item({ children, tabIndex }: ItemProps) {
  return <div className="item">{children}</div>;
}

Dropdown.Item = Item;
Dropdown.Menu = Menu;
