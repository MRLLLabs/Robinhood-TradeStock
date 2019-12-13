import React from 'react';
import Menu from './styles/Menu/wrapper';

const DropDown = ({
  tabHandler, tab, background, fontColor,
}) => (
  <Menu background={background}>
    <Menu.Header>Order Type</Menu.Header>
    <Menu.Item tab={tab} current={'Market Order'}
      onClick={tabHandler} color={fontColor}>Market Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Limit Order'}
      onClick={tabHandler} color={fontColor}>Limit Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Stop Loss Order'}
      onClick={tabHandler} color={fontColor}>Stop Loss Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Stop Limit Order'}
      onClick={tabHandler} color={fontColor}>Stop Limit Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Trailing Stop Order'}
      onClick={tabHandler} color={fontColor}>Trailing Stop Order
    </Menu.Item>
  </Menu>
);

export default DropDown;
