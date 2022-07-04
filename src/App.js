import React from "react";

import GlobalStyle from "./styles/global/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/global/theme";

import Router from "./routes";

import { FinderProvider } from "./context/finder";

const App = () => {
  return (
    <FinderProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </FinderProvider>
  );
};

export default App;
