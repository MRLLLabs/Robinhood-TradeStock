import React from 'react';
import styled from 'styled-components';
import Span from './styles/Span/span';
import Wrapper from './styles/mainWrapper/wrapper';


const MenuWrapper = styled(Wrapper)`
  width: 180px;
  position: absolute;
  margin-top: 64px;
  margin-left: 80px;
  background: #1b1a1d;
`;

const Item = styled.div`
  width: 140px;
  margin: auto;
  text-alignt: left;
  padding: 16px;
  font-size: 13px;
  cursor: pointer;
  color: ${props => props.current === props.tab ? '#20cd99' : 'white'}

  &:hover {
    color: #20cd99;
  }
`;

const MenuHeader = styled.div`
  border-bottom: 1px solid black;
  font-size: 18px;
  padding: 16px;
  text-alignt: left;
`;

const DropDown = ({ tabHandler, tab }) => (
  <MenuWrapper>
    <MenuHeader>Order Type</MenuHeader>
    <Item tab={tab} current={'Market Order'}
      onClick={tabHandler}> Market Order
    </Item>
    <Item tab={tab} current={'Limit Order'}
      onClick={tabHandler}>Limit Order
    </Item>
    <Item tab={tab} current={'Stop Loss Order'}
      onClick={tabHandler}>Stop Loss Order
    </Item>
    <Item tab={tab} current={'Stop Limit Order'}
      onClick={tabHandler}>Stop Limit Order
    </Item>
    <Item tab={tab} current={'Trailing Stop Order'}
      onClick={tabHandler}>Trailing Stop Order
    </Item>
  </MenuWrapper>
);

export default DropDown;
