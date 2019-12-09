import styled from 'styled-components';
import MainWrapper from '../mainWrapper/wrapper';
import DataWrapper from './dataWrapper';

const Info = styled(MainWrapper)`
  width: 290px;
  background: #1b1a1d;
  position: absolute;
  margin-left: -275px;
  margin-top: -120px;
  z-index: 1;
`;

Info.Header = styled.div`
  border-bottom: 1px solid black;
  padding: 20px;
  font-size: 16px;
`;

Info.Footer = styled.div`
  color: grey;
  width: 240px;
  margin: auto;
  padding: 20px;
`;
Info.DataWrapper = DataWrapper;

export default Info;
