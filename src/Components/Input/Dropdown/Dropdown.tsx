import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { DropdownContext } from './DropdownContext';
import styles from './Dropdown.module.css';

export interface DropdownProps {
  children: ReactNode;
  renderTrigger: (onChange: any) => ReactNode | null;
  menuPlacement?: 'bottom-start' | 'bottom';
}

export default function Dropdown({
  children,
  renderTrigger,
  menuPlacement
}: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);

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

  const [reference, setReference] = useState<HTMLDivElement | null>(null);
  const [popper, setPopper] = useState<HTMLDivElement | null>(null);

  // Add prop for deciding outer boundary for popper?
  const { styles, attributes } = usePopper(reference, popper, {
    placement: menuPlacement ? menuPlacement : 'bottom',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 6]
        }
      },
      {
        name: 'preventOverflow'
      }
    ]
  });

  return (
    <>
      <DropdownContext.Provider
        value={{
          toggleVisibility: () => setIsVisible(!isVisible)
        }}
      >
        <div ref={wrapperRef}>
          <div
            ref={setReference}
          >
            {renderTrigger(() => setIsVisible(!isVisible))}
          </div>
          {isVisible && (
            <div
              ref={setPopper}
              style={styles.popper}
              {...attributes.popper}
            >
              {children}
            </div>
          )}
        </div>
      </DropdownContext.Provider>
    </>
  );
}

export interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return <div className={styles.menu}>{children}</div>;
}
export interface OptionProps {
  children: ReactNode;
  onChange(): void;
}

// Use context hook instead?
function Option({ children, onChange }: OptionProps) {
  return (
    <DropdownContext.Consumer>
      {({ toggleVisibility }) => (
        <div
          className={styles.option}
          onClick={() => {
            onChange();
            toggleVisibility();
          }}
        >
          <div className={styles.optionContent}>{children}</div>
        </div>
      )}
    </DropdownContext.Consumer>
  );
}
Dropdown.Option = Option;
Dropdown.Menu = Menu;
