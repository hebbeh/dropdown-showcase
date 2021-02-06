import styles from './Icon.module.css';
import menu from './Images/menu.png';
import placeholder from './Images/placeholder.png';
import placeholderII from './Images/placeholderII.png';
import placeholderIII from './Images/placeholderIII.png';
import placeholderIV from './Images/placeholderIV.png';

export interface IconProps {
  type:
    | 'placeholder'
    | 'placeholderII'
    | 'placeholderIII'
    | 'placeholderIV'
    | 'menu';
}

export default function Icon({ type }: IconProps) {
  const imageSrc = {
    menu: menu,
    placeholder: placeholder,
    placeholderII: placeholderII,
    placeholderIII: placeholderIII,
    placeholderIV: placeholderIV
  };

  return <img className={styles[type]} alt={type} src={imageSrc[type]} />;
}
