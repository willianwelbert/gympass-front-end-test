import React from 'react';

import {shallow} from 'enzyme';

import {findByTestAttr} from '../../testUtils';

import ErrorMessage from './Error.component';

const defaultProps = {
  message: 'error message'
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ErrorMessage {...setupProps} />);
};

test('renders error message', () => {
  const wrapper = setup();
  const ErrorMessage = findByTestAttr(wrapper, 'error-message');
  expect(ErrorMessage.length).toBe(1)
})

test('does NOT render empty message', () => {
  const wrapper = setup();
  const ErrorMessage = findByTestAttr(wrapper, 'error-message');
  expect(ErrorMessage.text().length).not.toBe(0);
})