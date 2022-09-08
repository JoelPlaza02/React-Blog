import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
      --NavbarColor: #4267B2;
      --WhiteColor: #fff;
      --BlackColor: #000;
      --ReadMoreColor: blueviolet;
      --ReadMoreColorHover: rgb(83, 9, 153);
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      background: ${({theme}) => theme.colors.body};
    }
`;

export default GlobalStyles;