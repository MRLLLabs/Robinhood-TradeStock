import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Arial;
        background: ${(props) => props.background}
        color: ${(props) => props.font}
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
      border: 1px solid ${(props) => (props.background === 'white' ? 'white' : '#1b1a1d')};
      &:hover {
        border: 1px solid ${(props) => (props.background === 'white' ? 'grey' : 'black')};
      }
      &:focus {
        border: 1px solid #20cd99;
      }

      background: ${(props) => (props.background === 'white' ? '#FAFAFA' : '#161618')};
    }
`;

export default GlobalStyle;
