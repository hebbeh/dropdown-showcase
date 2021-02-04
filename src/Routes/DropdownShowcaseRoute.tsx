import React, { useState, useEffect, RefObject, useRef } from 'react';
import Typography from '../Components/Style/Typography';
import Icon from '../Components/Style/Icon';
import Space from '../Components/Layout/Space';
import Dropdown from '../Components/Input/Dropdown';

function App() {
  const [firstMenuAction, setFirstMenuAction] = useState('No action selected');
  const [secondMenuAction, setSecondMenuAction] = useState(
    'No action selected'
  );

  const [firstMenuVisible, setFirstMenuVisible] = useState(true);
  const [secondMenuVisible, setSecondMenuVisible] = useState(true);

  return (
    <>
      <Typography type="subheader">
        Selected action in menu: {firstMenuAction}
      </Typography>
      <Space type="medium" />
      <div style={{ height: '260px' }}>
        {firstMenuVisible && (
          <Dropdown.Menu
            outsideClick={() => {
              console.log('clicked outside');
              setFirstMenuVisible(false);
            }}
          >
            {dataToBePutInAMenu.map((item) => {
              return (
                <Dropdown.Item
                  onChange={() => {
                    setFirstMenuAction(item.value);
                  }}
                >
                  <Typography type="content">{item.label}</Typography>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        )}
      </div>
      <Space type="big" />
      <Space type="big" />
      <Typography type="subheader">
        Selected action in menu: {secondMenuAction}
      </Typography>
      <Space type="medium" />
      <div style={{ height: '260px' }}>
        {secondMenuVisible && (
          <Dropdown.Menu
            outsideClick={() => {
              console.log('clicked outside II');
              setSecondMenuVisible(false);
            }}
          >
            {dataToBePutInAMenuII.map((item) => {
              return (
                <Dropdown.Item
                  onChange={() => {
                    setSecondMenuAction(item.value);
                  }}
                >
                  <Icon type="placeholder" />
                  <Space type="small" />
                  <Typography type="content">{item.label}</Typography>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        )}
      </div>
    </>
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
