import React, { useState } from 'react';
import Typography from '../Components/Style/Typography';
import Icon from '../Components/Style/Icon';
import Space from '../Components/Layout/Space';
import Dropdown from '../Components/Input/Dropdown';
import Button from '../Components/Input/Button';
import Divider from '../Components/Layout/Divider';

export default function DropdownShowcaseRoute() {
  const [firstMenuAction, setFirstMenuAction] = useState('No action selected');
  const [secondMenuAction, setSecondMenuAction] = useState(
    'No action selected'
  );

  // The consumer of the dropdown is in charge of what do do when the Option/OptionList onChange function is called
  // In this simple usecase the states firstMenuAction and secondMenuAction are updated
  const handleSelectChange = (value: string) => setFirstMenuAction(value);

  return (
    <>
      <Typography type="subheader">
        <div style={{ textAlign: 'center' }}>
          Selected action in menu: {firstMenuAction}
        </div>
      </Typography>
      <Space type="medium" />
      <div style={{ height: '260px' }}>
        <Dropdown
          renderTrigger={(onChange: any) => {
            return (
              <Button
                onClick={() => {
                  onChange();
                }}
              >
                <Typography type="content">Menu One</Typography>
              </Button>
            );
          }}
        >
          <Dropdown.Menu>
            <Dropdown.OptionList
              options={dataToBePutInAMenu}
              onChange={() => handleSelectChange}
              renderItem={(onChange: any, option: any) => {
                return (
                  <Dropdown.Option
                    onChange={() => {
                      setFirstMenuAction(option.value);
                    }}
                  >
                    <Typography type="content">{option.label}</Typography>
                  </Dropdown.Option>
                );
              }}
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Space type="big" />
      <Space type="big" />
      <Typography type="subheader">
        <div style={{ textAlign: 'center' }}>
          Selected action in menu: {secondMenuAction}
        </div>
      </Typography>
      <Space type="medium" />
      <div style={{ height: '260px' }}>
        <Dropdown
          renderTrigger={(onChange: any) => {
            return (
              <div
                onClick={() => {
                  onChange();
                }}
              >
                <Icon type="menu" />
              </div>
            );
          }}
        >
          <Dropdown.Menu>
            <Dropdown.Option
              onChange={() => {
                setSecondMenuAction('Action IC 1');
              }}
            >
              <Icon type="placeholder" />
              <Space type="small" />

              <Typography type="content">
                Individually composed option 1
              </Typography>
            </Dropdown.Option>
            <Dropdown.Option
              onChange={() => {
                setSecondMenuAction('Action IC 2');
              }}
            >
              <Typography type="content">
                Individually composed option 2
              </Typography>
            </Dropdown.Option>
            <Space type="small" />
            <Divider type="data" />
            <Space type="small" />
            <Dropdown.Option
              onChange={() => {
                setSecondMenuAction('Action IC 3');
              }}
            >
              <Typography type="content">
                Individually composed option 3
              </Typography>
            </Dropdown.Option>{' '}
            <Dropdown.Option
              onChange={() => {
                setSecondMenuAction('Action IC 4');
              }}
            >
              <Typography type="content">
                Individually composed option 4
              </Typography>
            </Dropdown.Option>{' '}
            <Dropdown.Option
              onChange={() => {
                setSecondMenuAction('Action IC 5');
              }}
            >
              <Typography type="content">
                Individually composed option 5
              </Typography>
            </Dropdown.Option>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

const dataToBePutInAMenu = [
  { label: 'Label option item 1', value: 'Action1' },
  { label: 'Label option item 2', value: 'Action2' },
  { label: 'Label option item 3', value: 'Action3' },
  { label: 'Label option item 4', value: 'Action4' },
  { label: 'Label option item 5', value: 'Action5' }
];

const dataToBePutInAMenuII = [
  { label: 'Label option item 6', value: 'Action6' },
  { label: 'Label option item 7', value: 'Action7' }
];
const dataToBePutInAMenuIII = [
  { label: 'Label option item 8', value: 'Action8' },
  { label: 'Label option item 9', value: 'Action9' }
];
