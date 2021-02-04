import React from 'react';
import './Icon.css';
import placeholder from './Images/MenuIconPlaceholder.png';

export interface IconProps {
  type?: 'placeholder' | 'menu';
}

export default function Icon({ type }: IconProps) {
  return <img className={type} alt={type} src={placeholder} />;
}
