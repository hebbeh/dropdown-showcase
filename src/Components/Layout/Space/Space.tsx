import './Space.css';

export interface SpaceProps {
  type?: 'tiny' | 'small' | 'medium' | 'big';
}

export default function Space({ type }: SpaceProps) {
  return <div className={type} />;
}
