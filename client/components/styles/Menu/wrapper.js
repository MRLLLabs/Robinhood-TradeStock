import styled from 'styled-components';
import Wrapper from '../mainWrapper/wrapper';
import Item from './item';
import Header from './header';

const Menu = styled(Wrapper)`
  width: 180px;
  position: absolute;
  margin-top: 64px;
  margin-left: 80px;
  background: #1b1a1d;
  z-index: 2;
`;

Menu.Item = Item;
Menu.Header = Header;

export default Menu;
