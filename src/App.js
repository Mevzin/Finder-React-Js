import React from 'react';

import GlobalStyle from './globalStyle';
import Home from './pages/home';

import { ThemeProvider } from 'styled-components';
import theme from './styles/global/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;