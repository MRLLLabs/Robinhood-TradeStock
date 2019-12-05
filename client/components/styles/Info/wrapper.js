import styled from 'styled-components';
import MainWrapper from '../mainWrapper/wrapper';
import Header from './header';
import Footer from './footer';
import DataWrapper from './dataWrapper';

const Info = styled(MainWrapper)`
  width: 290px;
  background: #1b1a1d;
  z-index: 1;
`;

Info.Header = Header;
Info.Footer = Footer;
Info.DataWrapper = DataWrapper;

export default Info;
