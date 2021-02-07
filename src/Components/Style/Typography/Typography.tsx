import { ReactNode } from 'react';
import styles from './Typography.module.css';

export interface TypographyProps {
  children: ReactNode;
  type: 'header' | 'subheader' | 'content';
}

export default function Typography({
  children,
  type = 'content'
}: TypographyProps) {
  return <div className={styles[type]}>{children}</div>;
}
