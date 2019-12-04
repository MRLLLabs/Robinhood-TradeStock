/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import StopLimitOrder from '../client/components/stopLimitOrder.jsx';

describe('<StopLimitOrder /> Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<StopLimitOrder />);
    expect(tree).toMatchSnapshot();
  });

  it('initiates state as expected', () => {
    const wrapper = shallow(<StopLimitOrder />);
    expect(wrapper.state().stopPrice).toBe(0);
    expect(wrapper.state().shares).toBe(0);
    expect(wrapper.state().expires).toBe('Good for Day');
  });
});
