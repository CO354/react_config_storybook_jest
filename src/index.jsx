import React from 'react';
import ReactDOM from 'react-dom';

import { Heading } from './components/Heading';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

//eslint-disable-next-line
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading>Leio</Heading>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
