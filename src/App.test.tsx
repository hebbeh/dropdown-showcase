import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Components/Input/Dropdown';
import Typography from './Components/Style/Typography';
import Button from './Components/Input/Button';

test('renders learn react link', () => {
  render(
    <Dropdown
      menuPlacement="bottom-start"
      renderTrigger={(onClick: any) => {
        return (
          <Button onClick={onClick}>
            <Typography type="content">Menu trigger</Typography>
          </Button>
        );
      }}
    >
      <Dropdown.Menu>
        <Dropdown.Option onChange={() => {}}>
          <Typography type="content">"Label"</Typography>
        </Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
  const triggerElement = screen.getByText(/Menu trigger/i);
  expect(triggerElement).toBeInTheDocument();
});
