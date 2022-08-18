import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: #f0f0f0;
    --color-background: #131516;
    --color-shape: #3d3e3e;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    color: var(--color-text);

    background-color: var(--color-background);
  }

  p, h1, h2, h3, h4, h5, h6, li, label, button, input, textarea, select, option, a {
    font-family: 'Montserrat', sans-serif;
    color: var(--color-text);
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: var(--color-shape);
    font-weight: 700;
  }
`
