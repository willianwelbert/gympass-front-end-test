import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if(state) wrapper.setState(state);
  return wrapper
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('it renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app');
  expect(appComponent.length).toBe(1);
});

test('renders footer component in every page', () => {
  const wrapper = setup();
  const footerComponent = findByTestAttr(wrapper, 'footer');
  expect(footerComponent.length).toBe(1);
})
