import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  @media (max-width: 640px){
    padding-left: 0.25rem;
  }

  padding-left: 0.5rem;
`

// 大小变化随Header Font-Size变化
const Svg = styled.svg`
  @media (min-width: 641px) {
    width: 1.625rem;
    height: 1.625rem;
  }
  @media (min-width: 1024px) {
    width: 1.75rem;
    height: 1.75rem
  }

  width: 1.5rem;
  height: 1.5rem;
`

const Moon = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
      fill="#3c3cb5"
      className="color000 svgShape"
    ></path>
  </Svg>
);

const Sun = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12ZM5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm5.66,2.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34Zm-12-.29a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z"
      fill="#ffbf66"
      className="color000 svgShape"
    ></path>
  </Svg>
);

const ThemeChanger = (props) => {
  const { theme, setTheme } = props;

  const [svg, setSvg] = useState();
  useEffect(() => {
    theme === "dark" ? setSvg(Sun) : setSvg(Moon);
  });

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  };

  return (
    <Div type="button" onClick={toggleTheme}>
      {svg}
    </Div>
  );
};

export default ThemeChanger;
