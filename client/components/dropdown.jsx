import React from 'react';
import Span from './styles/Span/span';
import Wrapper from './styles/mainWrapper/wrapper';
import styled from 'styled-components';

const MenuWrapper = styled(Wrapper)`
  width: 180px;
`;

const Item = styled.div`
  width: 140px;
  margin: auto;
  text-alignt: left;
  padding: 10px;
  font-size: 13px;
`;
const MenuHeader = styled(Item)`
  border-bottom: 1px solid black;
  font-size: 18px;
`;

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Market Order',
    };
  }

  // clickHandler() {

  // }

  render() {
    return (
      <MenuWrapper>
        <MenuHeader>Order Type</MenuHeader>
        <Item>Market Order</Item>
        <Item>Limit Order</Item>
        <Item>Stop Loss Order</Item>
        <Item>Stop Limit Order</Item>
        <Item>Trailing Stop Order</Item>
      </MenuWrapper>
    )
  }
}

export default DropDown;
