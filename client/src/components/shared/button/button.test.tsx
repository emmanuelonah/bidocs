import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

import { theme } from 'utils';
import { BlueButton } from './button.component';

let isClicked = false;
describe('<Button/>', () => {
  afterAll(() => {
    isClicked = false;
  });

  function renderButton(onClick?: React.MouseEventHandler) {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <BlueButton level="semi" shape="radius" data-testid="btn" onClick={onClick}>
          Click Me
        </BlueButton>
      </ThemeProvider>
    );

    return rerender;
  }

  test('should render component', () => {
    renderButton();
  });

  test('should fire a click event', () => {
    renderButton(() => {
      isClicked = true;
    });

    fireEvent.click(screen.getByTestId(/btn/));

    expect(isClicked).toBeTruthy();
  });
});
