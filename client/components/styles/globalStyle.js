import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Arial;
        background: #1b1a1d;
        color: white;
        font-size: 13px;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number], textarea {
      -webkit-transition: all 0.20s ease-in-out;
      -moz-transition: all 0.20s ease-in-out;
      -ms-transition: all 0.20s ease-in-out;
      -o-transition: all 0.20s ease-in-out;
      outline: none;
      &:hover {
        border: 1px solid white;
      }
  
      &:focus {
        border: 1px solid #20cd99;
      }
    }
`;

export default GlobalStyle;
