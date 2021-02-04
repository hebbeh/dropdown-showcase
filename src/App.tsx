import React from 'react';
import './App.css';
import Typography from './Components/Style/Typography';
import Icon from './Components/Style/Icon';
import Space from './Components/Layout/Space';
import Divider from './Components/Layout/Divider';
import Dropdown from './Components/Input/Dropdown';

function App() {
  return (
    <div className="container">
      <div className="headerContainer">
        <Typography type="header">Dropdown component</Typography>
        <Space type="medium" />
        <Divider type="decorative" />
        <Dropdown.Menu>
          <Dropdown.Item>
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
        </Dropdown.Menu>
        <Space type="big" />
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon type="placeholder" />
            <Space type="small" />
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon type="placeholder" />
            <Space type="small" />
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon type="placeholder" />
            <Space type="small" />
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon type="placeholder" />
            <Space type="small" />
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon type="placeholder" />
            <Space type="small" />
            <Typography type="content">Dropdown item</Typography>
          </Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </div>
  );
}

export default App;
