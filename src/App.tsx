import React from 'react';
import './App.css';
import Typography from './Components/Style/Typography';
import Space from './Components/Layout/Space';
import Divider from './Components/Layout/Divider';
import DropdownShowcaseRoute from './Routes/DropdownShowcaseRoute';

function App() {
  return (
    <div className="container" id="popperBoundary">
      <div className="headerContainer">
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
