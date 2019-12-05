/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import MarketPriceInfo from '../client/components/marketPriceInfo.jsx';

describe('<MarketPriceInfo/>', () => {
  it('Displays correct text headings', () => {
    const wrapper = shallow(<MarketPriceInfo/>);
    expect(wrapper.contains('Last Sale (IEXG)')).toBe(true);
    expect(wrapper.contains('Bid (IEXG)')).toBe(true);
    expect(wrapper.contains('Ask (XNAS)')).toBe(true);
  });
});
