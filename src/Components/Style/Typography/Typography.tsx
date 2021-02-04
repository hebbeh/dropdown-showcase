import React, { ReactNode } from 'react';
import './Typography.css';

export interface TypographyProps {
  children: ReactNode;
  type?: 'header' | 'subheader' | 'content';
}

export default function Typography({
  children,
  type = 'content'
}: TypographyProps) {
  return <div className={type}>{children}</div>;
}
