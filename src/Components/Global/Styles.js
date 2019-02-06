import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "proxima-soft", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    font-family: "proxima-soft", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;    
  }
  ::-webkit-scrollbar {
  width: 5px;
  }
  .grecaptcha-badge {
    display: none;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    transition: background 200ms; 
    border-radius: 10px;
    background: ${p => p.theme.background_light.hsl}; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    transition: background 200ms;
    background: ${p => p.theme.accent.lighten(20)}; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.accent.lighten(10)}; 
  }
  
`;

export default GlobalStyles;