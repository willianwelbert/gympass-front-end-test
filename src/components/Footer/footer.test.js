import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../testUtils';

import Footer from './footer.component';

const defaultProps = {}

const setup = ( props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Footer {...setupProps} />);
};

test('renders footer', () => {
  const wrapper = setup();
  const FooterComponent = findByTestAttr(wrapper, 'footer');
  expect(FooterComponent.length).toBe(1);
})