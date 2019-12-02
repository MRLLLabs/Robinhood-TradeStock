/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './app.jsx';

describe('App component', () => {
  it('displays Buy in Header', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.containsMatchingElement('Estimated Cost')).toBe(true);
  });

  // it('displays Buy in Header', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.containsMatchingElement('Estimated Cost')).toBe(true);
  // });
});
