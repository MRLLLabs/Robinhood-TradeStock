/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Dropdown from '../client/components/dropdown.jsx';
import App from '../client/components/app.jsx';
import H1 from '../client/components/styles/mainWrapper/h1';
import Menu from '../client/components/styles/Menu/wrapper';


describe('<Dropdown /> Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays menu header', () => {
    const menuWrapper = shallow(<Dropdown/>);
    expect(menuWrapper.contains('Order Type')).toBe(true);
  });

  it('displays tab title Market Order', () => {
    const menuWrapper = shallow(<Dropdown/>);
    expect(menuWrapper.contains('Market Order')).toBe(true);
  });

  it('displays tab title Trailing Stop Order', () => {
    const menuWrapper = shallow(<Dropdown/>);
    expect(menuWrapper.contains('Trailing Stop Order')).toBe(true);
  });

  // it('updates state of <App /> on a click', () => {
  //   const appWrapper = shallow(<App />, { disableLifecycleMethods: true });
  //   const menuWrapper = shallow(<Dropdown/>);
  //   let header = menuWrapper.find(Menu.Header);
  //   console.log(header.text())
  //   // expect(menuWrapper.find('Styled Component > div')).to.have.lenghtOf(5);
  //   // console.log(appWrapper.state());
  // });
});
