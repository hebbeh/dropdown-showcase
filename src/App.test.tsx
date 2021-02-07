import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor
} from '@testing-library/react';
import Dropdown from './Components/Input/Dropdown';
import Typography from './Components/Style/Typography';
import Button from './Components/Input/Button';

test('renders dropdown and dropdown menu', async () => {
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
          <Typography type="content">Label</Typography>
        </Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );

  const triggerElement = screen.getByText(/Menu trigger/i);
  expect(triggerElement).toBeInTheDocument();

  act(() => {
    fireEvent(
      triggerElement,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
  });

  await waitFor(() => {
    const menuElement = screen.getByText(/Label/i);
    expect(menuElement).toBeInTheDocument();
  });
});
