import { createGlobalStyle } from "styled-components";

import { theme } from "./theme.js";

export const GlobalStyle = createGlobalStyle`


 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    }

body {
    background-color: ${theme.colors.background};
}


`;
