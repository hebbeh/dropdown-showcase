import React from 'react';
import styles from './App.module.css';
import Typography from './Components/Style/Typography';
import Space from './Components/Layout/Space';
import Divider from './Components/Layout/Divider';
import DropdownShowcaseRoute from './Routes/DropdownShowcaseRoute';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Typography type="header">Dropdown component</Typography>
        <Space type="medium" />
        <Divider type="decorative" />
        <Space type="big" />
        <DropdownShowcaseRoute />
      </div>
    </div>
  );
}

export default App;
