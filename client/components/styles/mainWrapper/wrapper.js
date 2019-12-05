import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import Button from './button';
import H1 from './h1';
import MenuIcon from './menuIcon';
import InvertedButton from './invertedButton';

const Wrapper = styled.div`
     width: 280px;
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

export default Wrapper;
