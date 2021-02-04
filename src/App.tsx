import React from 'react';
import './App.css';
import Typography from './Components/Style/Typography';
import Space from './Components/Layout/Space';
import Divider from './Components/Layout/Divider';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="headerContainer">
          <Typography type="header">Dropdown component</Typography>
          <Space type="medium" />
          <Divider type="decorative" />
        </div>
      </div>
    </div>
  );
}

export default App;
