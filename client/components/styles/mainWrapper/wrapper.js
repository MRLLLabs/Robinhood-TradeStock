import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import Button from './button';
import H1 from './h1';
import MenuIcon from './menuIcon';
import InvertedButton from './invertedButton';
import InputWrapper from '../inputWrapper/inputWrapper';

const Wrapper = styled.div`
     width: 275px;
     border: 1px solid black;
     border-radius: 4px;
     box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 
     0 3px 24px rgba(0, 0, 0, 0.6);
`;

Wrapper.Header = Header;
Wrapper.Footer = Footer;
Wrapper.Button = Button;
Wrapper.H1 = H1;
Wrapper.MenuIcon = MenuIcon;
Wrapper.InvertedButton = InvertedButton;
Wrapper.App = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
Wrapper.MarketPrice = styled.div`
  width: 220px;
  margin: auto;
  padding: 10px;
  text-align: center;
`;
Wrapper.Estimate = styled(InputWrapper)`
  border-top: 1px solid black;
`;

export default Wrapper;
