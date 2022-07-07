import React from "react";

import GlobalStyle from "./styles/global/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/global/theme";

import Router from "./routes";

import { FinderProvider } from "./context/finder";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FinderProvider>
        <GlobalStyle />
        <Router />
      </FinderProvider>
    </ThemeProvider>
  );
};

export default App;
