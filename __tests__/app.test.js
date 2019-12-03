/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/components/app.jsx';

describe('App component', () => {
  it('displays Buy in Header', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.containsMatchingElement('Estimated Cost')).toBe(true);
  });

  // it('updates state from componoentDidMount', async (done) => {
  //   const wrapper = await shallow(<App />);
  //   console.log('WRAPPER', wrapper.state());
  //   done();
  // });

  // it('displays Buy in Header', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.containsMatchingElement('Estimated Cost')).toBe(true);
  // });
});
