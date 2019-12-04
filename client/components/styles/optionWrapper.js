import styled from 'styled-components';
import Menu from './Menu/wrapper';
import Option from './option';


const optionWrapper = styled.div`
  width: 120px;
  position: absolute;
  margin-top: 36px;
  margin-left: 78px;
  background: #1b1a1d;
`;

optionWrapper.Option = Option;


export default optionWrapper;
