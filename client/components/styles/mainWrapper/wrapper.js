import styled from "styled-components";
import Header from './header';
import Footer from './footer';
import Button from './button';
import H1 from './h1';
import MenuIcon from './menuIcon';

const Wrapper = styled.div`
     width: 280px;
     border: 1px solid black;
`

Wrapper.Header = Header;
Wrapper.Footer = Footer;
Wrapper.Button = Button;
Wrapper.H1 = H1;
Wrapper.MenuIcon = MenuIcon;

export default Wrapper;