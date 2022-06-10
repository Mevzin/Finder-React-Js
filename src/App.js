import React from "react";

import GlobalStyle from "./styles/global/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/global/theme";

import Home from "./pages/home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>

    </ThemeProvider>
  );
};

export default App;
