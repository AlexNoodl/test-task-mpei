import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

  }

  @font-face {
    font-family: Roboto;
    font-weight: 400;
  }
  
  @font-face {
    font-family: Roboto;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Racing Sans One', cursive;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyle;
