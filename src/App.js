import React from "react";

import GlobalStyle from "./styles/global/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/global/theme";

import Router from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
