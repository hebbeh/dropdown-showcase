import React, { ReactNode } from 'react';
import './Button.css';

export interface ButtonProps {
  children: ReactNode;
  onClick(): void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <div className="button" onClick={() => onClick()}>
      {children}
    </div>
  );
}
