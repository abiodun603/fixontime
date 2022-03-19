import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body{
        overflow-y: ${({sidebar}) => (sidebar ? 'hidden' : 'scroll')};
    }

`;

export default GlobalStyles;