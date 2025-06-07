import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };

  a {
    color: inherit;
    text-decoration: none;
  };

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;