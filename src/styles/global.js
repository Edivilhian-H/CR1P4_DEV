import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    }

      body {
    background: radial-gradient(circle at top right, #1a1a2e, #0b0f1a);
    color: #E5E7EB;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;
