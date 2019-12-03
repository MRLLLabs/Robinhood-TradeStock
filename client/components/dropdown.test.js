/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Dropdown from './dropdown.jsx';
import App from './app.jsx';
import H1 from './styles/mainWrapper/h1';

describe('<Dropdown /> Component', () => {
  const menuWrapper = mount(<Dropdown/>);
  it('displays menu header', () => {
    expect(menuWrapper.contains('Order Type')).toBe(true);
  });

  it('displays tab title Market Order', () => {
    expect(menuWrapper.contains('Market Order')).toBe(true);
  });

  it('displays tab title Trailing Stop Order', () => {
    expect(menuWrapper.contains('Trailing Stop Order')).toBe(true);
  });

  it('updates state of <App /> on a click', () => {
    const appWrapper = shallow(<App />, { disableLifecycleMethods: true });
    let header = appWrapper.find(H1);
    console.log(header.text())
    // expect(menuWrapper.find('Styled Component > div')).to.have.lenghtOf(5);
    // console.log(appWrapper.state());
  });
});
