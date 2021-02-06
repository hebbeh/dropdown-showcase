import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { DropdownContext } from './DropdownContext';
import './Dropdown.css';

export interface DropdownProps {
  children: ReactNode;
  renderTrigger: (onChange: any) => ReactNode | null;
}

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
        <div ref={wrapperRef}>
          {renderTrigger(() => setIsVisible(!isVisible))}
          {isVisible && <>{children}</>}
        </div>
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

interface OptionValues {
  label: string;
  value: string;
}
export interface OptionListProps {
  tabIndex?: number;
  options: OptionValues[];
  onChange(value: string): void;
  renderItem: (onChange: any, option: OptionValues) => ReactNode | null;
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
