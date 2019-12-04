import styled from 'styled-components';
import Input from './input';
import InputLabel from './inputLabel';
import InputDollar from './inputDollar';

const InputWrapper = styled.div`
    width: 220px;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;
InputWrapper.Input = Input;
InputWrapper.Label = InputLabel;
InputWrapper.Dollar = InputDollar;

export default InputWrapper;
