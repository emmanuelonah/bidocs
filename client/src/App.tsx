import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'utils';
import { Routes } from 'routes';
import { GlobalCss } from './global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <a href="#main" className="skip-content">
        Skip to main content
      </a>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
