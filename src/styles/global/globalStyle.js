import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
  
  html,body {
    background: ${({ theme }) => theme.colors.gray900};

    body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}
*::-webkit-scrollbar-track {
  background-color: transparent;
  position: absolute;
  opacity: 0.7;
}
*::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
}
  }
`;

export default GLobalStyle;
