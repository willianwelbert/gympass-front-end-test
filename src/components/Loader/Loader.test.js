import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../testUtils';

import {Loader} from './Loader.component';

const defaultProps = {};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Loader {...setupProps} />)
}

test('renders loader', () => {
  const wrapper = setup();
  const LoaderComponent = findByTestAttr(wrapper, 'loader');
  expect(LoaderComponent.length).toBe(1);
})

test('renders caption, in any case', () => {
  const wrapper = setup();
  const LoaderCaption = findByTestAttr(wrapper, 'loader-caption');
  expect(LoaderCaption.length).toBe(1)
})