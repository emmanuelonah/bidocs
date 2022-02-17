import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ConfigAccessibility } from 'components/shared';

import { theme } from 'utils';
import { GlobalCss } from './global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <a href="#main" className="skip-content">
        Skip to main content
      </a>
      <p>Welcome home</p>
      <ConfigAccessibility />
    </ThemeProvider>
  );
}

export default App;
