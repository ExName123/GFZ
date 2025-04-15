import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans Light';
    font-style: normal;
    font-weight: 300;
    src: url('https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRa1RVmPjeKy21_GQJaLlJI.woff') format('woff');
  }

  body {
    font-family: 'Open Sans Light', sans-serif;
  }
`;

export default GlobalStyle;
