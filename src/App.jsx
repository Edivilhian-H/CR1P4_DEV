import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Header from "./components/header";
import Hero from "./components/hero";
import Social from "./components/social";
import About  from "./components/about";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Social />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
