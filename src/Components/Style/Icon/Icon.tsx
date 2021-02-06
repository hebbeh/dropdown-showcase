import styles from './Icon.module.css';
import menu from './Images/menu.png';
import placeholder from './Images/placeholder.png';

export interface IconProps {
  type: 'placeholder' | 'menu';
}

export default function Icon({ type }: IconProps) {
  const imageSrc = { menu: menu, placeholder: placeholder };

  return <img className={styles[type]} alt={type} src={imageSrc[type]} />;
}
