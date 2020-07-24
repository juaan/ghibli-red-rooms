import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@chakra-ui/core';

import MainPage from './Components/MainPage';
import { StoreProvider } from './Store';
import './index.scss';

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </StoreProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
