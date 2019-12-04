/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MarketOrder from '../client/components/marketOrder.jsx';


describe('<MarketOrder /> component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<MarketOrder />);

    expect(tree).toMatchSnapshot();
  });

  it('initiates with state of 0 shares', () => {
    const wrapper = shallow(<MarketOrder />);
    expect(wrapper.state().shares).toBe(0);
  });
});
