import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
