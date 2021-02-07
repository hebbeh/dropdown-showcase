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

  return (
    <>
      <Typography type="subheader">
        <div style={{ textAlign: 'center' }}>
          Selected action in menu: {firstMenuAction}
        </div>
      </Typography>
      <Space type="big" />
      <DropDownExampleOne dropdownAction={setFirstMenuAction} />
      <Space type="big" />
      <Space type="big" />
      <Typography type="subheader">
        <div style={{ textAlign: 'center' }}>
          Selected action in menu: {secondMenuAction}
        </div>
      </Typography>
      <Space type="medium" />
      <DropDownExampleTwo dropdownAction={setSecondMenuAction} />
    </>
  );
}

interface DropdownExampleProps {
  dropdownAction(action: string): void;
}

function DropDownExampleOne({ dropdownAction }: DropdownExampleProps) {
  return (
    <Dropdown
      menuPlacement="bottom-start"
      renderTrigger={(onClick: any) => {
        return (
          <Button onClick={onClick}>
            <Typography type="content">Menu One</Typography>
          </Button>
        );
      }}
    >
      <Dropdown.Menu>
        {dataToBePutInAMenu.map((option) => {
          return (
            <Dropdown.Option
              onChange={() => {
                dropdownAction(option.value);
              }}
            >
              <Typography type="content">{option.label}</Typography>
            </Dropdown.Option>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const dataToBePutInAMenu = [
  { label: 'Label option item 1', value: 'Action 1' },
  { label: 'Label option item 2', value: 'Action 2' },
  { label: 'Label option item 3', value: 'Action 3' },
  { label: 'Label option item 4', value: 'Action 4' },
  { label: 'Label option item 5', value: 'Action 5' }
];

function DropDownExampleTwo({ dropdownAction }: DropdownExampleProps) {
  return (
    <Dropdown
      renderTrigger={(onChange: any) => {
        return (
          <div onClick={onChange}>
            <Icon type="menu" />
          </div>
        );
      }}
    >
      <Dropdown.Menu>
        <Dropdown.Option
          onChange={() => {
            dropdownAction('Action 1');
          }}
        >
          <Icon type="placeholder" />
          <Space type="small" />
          <Typography type="content">Individually composed option 1</Typography>
        </Dropdown.Option>
        <Space type="tiny" />
        <Divider type="data" />
        <Space type="tiny" />
        <Dropdown.Option
          onChange={() => {
            dropdownAction('Action 2');
          }}
        >
          <Icon type="placeholderII" />
          <Space type="small" />
          <Typography type="content">Individually composed option 2</Typography>
        </Dropdown.Option>
        <Dropdown.Option
          onChange={() => {
            dropdownAction('Action 3');
          }}
        >
          <Icon type="placeholderIII" />
          <Space type="small" />
          <Typography type="content">Individually composed option 3</Typography>
        </Dropdown.Option>
        <Dropdown.Option
          onChange={() => {
            dropdownAction('Action 4');
          }}
        >
          <Icon type="placeholderIV" />
          <Space type="small" />
          <Typography type="content">Individually composed option 4</Typography>
        </Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
}
