/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TrailingStopOrder from '../client/components/trailingStopOrder.jsx';

describe('<TrailingStopOrder /> Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TrailingStopOrder />);
    expect(tree).toMatchSnapshot();
  });

  it('initiates state as expected', () => {
    const wrapper = shallow(<TrailingStopOrder />);
    expect(wrapper.state().trail).toBe(0);
    expect(wrapper.state().trailType).toBe('Percentage');
    expect(wrapper.state().shares).toBe(0);
    expect(wrapper.state().expires).toBe('Good for Day');
  });
});
