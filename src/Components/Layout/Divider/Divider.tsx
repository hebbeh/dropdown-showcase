import styles from './Divider.module.css';

export interface DividerProps {
  type: 'decorative' | 'data';
}

export default function Divider({ type }: DividerProps) {
  return <div className={styles[type]} />;
}
