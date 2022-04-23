import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, screen } from '@testing-library/react';

import { theme } from 'utils';
import Modal from './modal.component';

export const details = [
  '401 - something: "wrong wrong"',
  '404 - not found endpoint: "api.emmanuelonah.com/v1/users"',
  '500 - Internal server error.',
];
export const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum asperiores aperiam';

function renderModal() {
  const { rerender } = render(
    <ThemeProvider theme={theme}>
      <Modal type="success">
        <Modal.Header>Header Success</Modal.Header>
        <Modal.Body message={message} details={details} listTestId="testList" />
      </Modal>
    </ThemeProvider>
  );

  return rerender;
}

describe('<VisuallyHidden/>', () => {
  test('should render component', () => {
    renderModal();
  });

  test('should test the details functionalities', () => {
    renderModal();

    fireEvent.click(screen.getByTestId(/listBtn/));
    expect(screen.getByTestId(/testList/)).toBeInTheDocument();
  });
});
