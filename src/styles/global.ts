import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
   outline: 0;
 }

 ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme['blue']};
  }

 body {
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
    background-color: ${(props => props.theme["base-background"])};
 }

 body, input, textarea, button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
 }
`