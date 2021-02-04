import './Divider.css';

export interface DividerProps {
  type?: 'decorative' | 'data';
}

export default function Divider({ type }: DividerProps) {
  return <div className={type} />;
}
