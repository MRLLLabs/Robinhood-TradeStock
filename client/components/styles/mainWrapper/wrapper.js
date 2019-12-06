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

Wrapper.Type = styled.div`
  font-size: 16px;
  display: inline-block;
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 15px;
  border-bottom: 1px solid ${(props) => (props.id === props.type ? '#20cd99' : 'none')};
  color: ${(props) => (props.id === props.type ? '#20cd99' : '')}

  &:hover {
    color: #20cd99;
  }
`;

Wrapper.TypeWrapper = styled.div`
  width: 180px;
  margin-left: 12px;
`;

Wrapper.Image = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: -5px;
`;

Wrapper.Arrow = styled.img`
  height: 20px;
  width: 20px;
  float: right;
`;

export default Wrapper;
