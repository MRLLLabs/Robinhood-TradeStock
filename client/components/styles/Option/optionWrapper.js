import styled from 'styled-components';
import Option from './option';
import MainOption from './mainOption';


const optionWrapper = styled.div`
  width: 120px;
  position: absolute;
  margin-top: 36px;
  margin-left: 77px;
  background: #1b1a1d;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 
  0 3px 24px rgba(0, 0, 0, 0.6);
`;

optionWrapper.Option = Option;
optionWrapper.Main = MainOption;


export default optionWrapper;
