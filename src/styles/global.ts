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

 body {
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
    background-color: ${(props => props.theme["base-background"])};
 }

 body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
 }
`