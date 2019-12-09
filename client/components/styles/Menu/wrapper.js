import styled from 'styled-components';
import Wrapper from '../mainWrapper/wrapper';

const Menu = styled(Wrapper)`
  width: 180px;
  position: absolute;
  margin-top: 64px;
  margin-left: 80px;
  background: #1b1a1d;
  z-index: 2;
`;

Menu.Item = styled.div`
  width: 140px;
  margin: auto;
  text-align: left;
  padding: 16px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => (props.current === props.tab ? '#20cd99' : 'white')}

  &:hover {
    color: #20cd99;
  }
`;

Menu.Header = styled.div`
  border-bottom: 1px solid black;
  font-size: 18px;
  padding: 16px;
  text-alignt: left;
`;

export default Menu;
