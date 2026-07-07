import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Header from "./components/header";
import Hero from "./components/hero";
import Social from "./components/social";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import BackArrow from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Social />
        <About />
        <Projects />
        <Skills />
        <Footer />
        <BackArrow />
      </ThemeProvider>
    </>
  );
}

export default App;
