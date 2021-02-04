import React, { useState } from 'react';
import './App.css';
import Typography from './Components/Style/Typography';
import Icon from './Components/Style/Icon';
import Space from './Components/Layout/Space';
import Divider from './Components/Layout/Divider';
import Dropdown from './Components/Input/Dropdown';

function App() {
  const [firstMenuAction, setFirstMenuaction] = useState('No action selected');
  const [secondMenuAction, setSecondMenuaction] = useState(
    'No action selected'
  );

  return (
    <div className="container">
      <div className="headerContainer">
        <Typography type="header">Dropdown component</Typography>
        <Space type="medium" />
        <Divider type="decorative" />
        <Space type="big" />
        <Typography type="subheader">
          Selected action in menu: {firstMenuAction}
        </Typography>
        <Space type="medium" />
        <Dropdown.Menu>
          {dataToBePutInAMenu.map((item) => {
            return (
              <Dropdown.Item
                onChange={() => {
                  setFirstMenuaction(item.value);
                }}
              >
                <Typography type="content">{item.label}</Typography>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
        <Space type="big" />
        <Space type="big" />
        <Typography type="subheader">
          Selected action in menu: {secondMenuAction}
        </Typography>
        <Space type="medium" />
        <Dropdown.Menu>
          {dataToBePutInAMenuII.map((item) => {
            return (
              <Dropdown.Item
                onChange={() => {
                  setSecondMenuaction(item.value);
                }}
              >
                <Icon type="placeholder" />
                <Space type="small" />
                <Typography type="content">{item.label}</Typography>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </div>
    </div>
  );
}

const dataToBePutInAMenu = [
  { label: 'Dropdown component', value: 'Action1' },
  { label: 'Dropdown component', value: 'Action2' },
  { label: 'Dropdown component', value: 'Action3' },
  { label: 'Dropdown component', value: 'Action4' },
  { label: 'Dropdown component', value: 'Action4' }
];

const dataToBePutInAMenuII = [
  { label: 'Dropdown component', value: 'Action5' },
  { label: 'Dropdown component', value: 'Action6' },
  { label: 'Dropdown component', value: 'Action7' },
  { label: 'Dropdown component', value: 'Action8' },
  { label: 'Dropdown component', value: 'Action9' }
];

export default App;
