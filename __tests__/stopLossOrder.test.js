/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import StopLossOrder from '../client/components/stopLossOrder.jsx';

describe('<StopLossOrder /> Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<StopLossOrder />);
    expect(tree).toMatchSnapshot();
  });

  it('initiates state as expected', () => {
    const wrapper = shallow(<StopLossOrder />);
    expect(wrapper.state().limitPrice).toBe(0);
    expect(wrapper.state().shares).toBe(0);
    expect(wrapper.state().expires).toBe('Good for Day');
  });
});
