import { ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: ReactNode;
  onClick(): void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <div className={styles.button} onClick={() => onClick()}>
      {children}
    </div>
  );
}
