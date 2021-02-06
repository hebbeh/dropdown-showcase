import React, { useState, useCallback } from 'react';
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

  const handleSelectChange = useCallback(
    (value: string) => setFirstMenuAction(value),
    []
  );

  // MOVE STATE TO BE HANDLED INSIDE, this puts too much
  // implementation effort on the consumer.

  return (
    <>
      <Typography type="subheader">
        Selected action in menu: {firstMenuAction}
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
                      console.log('option.value', option.value);
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
        Selected action in menu: {secondMenuAction}
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
                <Icon type="placeholder" />
              </div>
            );
          }}
        >
          <Dropdown.Menu>
            <Dropdown.OptionList
              options={dataToBePutInAMenuII}
              onChange={() => handleSelectChange}
              renderItem={(onChange: any, option: any) => {
                return (
                  <Dropdown.Option
                    onChange={() => {
                      console.log('option.value', option.value);
                      setSecondMenuAction(option.value);
                    }}
                  >
                    <Typography type="content">{option.label}</Typography>
                  </Dropdown.Option>
                );
              }}
            />
            <Space type="small" />
            <Divider type="data" />
            <Space type="small" />
            <Dropdown.OptionList
              options={dataToBePutInAMenuIII}
              onChange={() => handleSelectChange}
              renderItem={(onChange: any, option: any) => {
                return (
                  <Dropdown.Option
                    onChange={() => {
                      console.log('option.value', option.value);
                      setSecondMenuAction(option.value);
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
  { label: 'Label option item 8', value: 'Action6' },
  { label: 'Label option item 9', value: 'Action7' }
];
