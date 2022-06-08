import { createGlobalStyle } from 'styled-components';

const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background: ${({theme}) => theme.colors.primary};
    display: flex;
  }
`;

export default GLobalStyle;