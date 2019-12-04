/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LimitOrder from '../client/components/limitOrder.jsx';

describe('<Limit Order /> Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<LimitOrder />);
    expect(tree).toMatchSnapshot();
  });

  it('initiates state as expected', () => {
    const wrapper = shallow(<LimitOrder />);
    expect(wrapper.state().limitPrice).toBe(0);
    expect(wrapper.state().shares).toBe(0);
    expect(wrapper.state().expires).toBe('Good for Day');
  });

  // Make test for state change on click of expires button;
});
