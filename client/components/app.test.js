/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './app.jsx';

describe('App component', () => {
  it('displays Buy in Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement('Estimated Cost')).toBe(true);
  });
});
