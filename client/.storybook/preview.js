import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalCss } from '../src/global.css';
import { theme } from '../src/utils';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalCss />
    {story()}
  </ThemeProvider>
));
