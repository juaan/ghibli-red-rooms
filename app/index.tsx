import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@chakra-ui/core';

import HomePage from './Components/HomePage';
import { StoreProvider } from './Store';
import './index.scss';

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  </StoreProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
