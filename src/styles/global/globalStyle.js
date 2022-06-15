import { createGlobalStyle } from 'styled-components';

const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }

  body {
    background: ${({theme}) => theme.colors.gray900};
    display: flex;
  }
`;

export default GLobalStyle;