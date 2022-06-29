import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body {
  margin: 0 auto;
  max-width: 1200px;
  font-family: "Oswald", sans-serif;
  color: white;
  background-color: black;
  height: 500vh;
  }
`
