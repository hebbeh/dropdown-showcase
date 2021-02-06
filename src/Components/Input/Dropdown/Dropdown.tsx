import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { DropdownContext } from './DropdownContext';
import './Dropdown.css';

export interface DropdownProps {
  children: ReactNode;
  renderTrigger: (onChange: any) => ReactNode | null;
}
// onChange(value: string): void;

export default function Dropdown({ children, renderTrigger }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Close menu if user clicks outside of it
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Element)
      ) {
        console.log('You clicked outside of me!');
        if (isVisible) setIsVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, isVisible]);

  return (
    <>
      <DropdownContext.Provider
        value={{
          toggleVisibility: () => setIsVisible(!isVisible)
        }}
      >
        {renderTrigger(() => setIsVisible(!isVisible))}
        {isVisible && <div ref={wrapperRef}>{children}</div>}
      </DropdownContext.Provider>
    </>
  );
}

export interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return <div className="menu">{children}</div>;
}
export interface OptionProps {
  children: ReactNode;
  tabIndex?: number;
  onChange(): void;
}

function Option({ children, tabIndex, onChange }: OptionProps) {
  return (
    <DropdownContext.Consumer>
      {({ toggleVisibility }) => (
        <div
          className="option"
          onClick={() => {
            onChange();
            toggleVisibility();
          }}
        >
          <div className="optionContent">{children}</div>
        </div>
      )}
    </DropdownContext.Consumer>
  );
}

interface Option {
  label: string;
  value: string;
}
export interface OptionListProps {
  tabIndex?: number;
  options: Option[];
  onChange(value: string): void;
  renderItem: (onChange: any, option: Option) => ReactNode | null;
}

export function OptionList({
  tabIndex,
  options,
  onChange,
  renderItem
}: OptionListProps) {
  return (
    <>
      {options.map((option) => {
        return renderItem(() => onChange(option.value), option);
      })}
    </>
  );
}

Dropdown.OptionList = OptionList;
Dropdown.Option = Option;
Dropdown.Menu = Menu;
