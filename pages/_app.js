import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/header";
import { lightTheme } from "../lib/lightTheme";
import { darkTheme } from "../lib/darkTheme";

import "../styles/globals.css";

const MainDiv = styled.div`
  background-color: ${props => {
    return props.theme.index.backgroundColor;
  }};
  color: ${props => props.theme.index.color};
`;

const HtmlDiv = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.app.backgroundColor};
`;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      // prefers-color-scheme 检测用户是否有将系统的主题色设置为亮色或者暗色
      let mode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(mode);
      localStorage.setItem("theme", mode);
    }
  }, []);

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <HtmlDiv>
        <MainDiv>
          <Header theme={theme} setTheme={setTheme} />
          <Component {...pageProps} />
        </MainDiv>
      </HtmlDiv>
    </ThemeProvider>
  );
}

export default MyApp;
