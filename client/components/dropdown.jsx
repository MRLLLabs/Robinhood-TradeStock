import React from 'react';
import Menu from './styles/Menu/wrapper';

const DropDown = ({ tabHandler, tab }) => (
  <Menu>
    <Menu.Header>Order Type</Menu.Header>
    <Menu.Item tab={tab} current={'Market Order'}
      onClick={tabHandler}>Market Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Limit Order'}
      onClick={tabHandler}>Limit Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Stop Loss Order'}
      onClick={tabHandler}>Stop Loss Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Stop Limit Order'}
      onClick={tabHandler}>Stop Limit Order
    </Menu.Item>
    <Menu.Item tab={tab} current={'Trailing Stop Order'}
      onClick={tabHandler}>Trailing Stop Order
    </Menu.Item>
  </Menu>
);

export default DropDown;
