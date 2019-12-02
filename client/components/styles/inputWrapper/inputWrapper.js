import styled from 'styled-components';
import Input from './input';
import InputLabel from './inputLabel';

const InputWrapper = styled.div`
    width: 220px;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;
InputWrapper.Input = Input;
InputWrapper.Label = InputLabel;

export default InputWrapper;
