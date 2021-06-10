import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

${normalize}

* {
    box-sizing: border-box;
}

*::after, *::before {
    box-sizing: inherit;
}

html {
    font-size: 62.5%
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size:1.6rem;
    font-weight: 400;
    color: #000;
}

section {
    width: 100%;
    padding: 20px;
}

h1, h2, h3, p {
    margin: 0;
    padding: 0;
}

a {
    text-decoration:none;
    color: inherit;
}

`;

export default GlobalStyle;
