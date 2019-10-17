import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../testUtils';

import OwnerInfo from './OwnerInfo.component';

const defaultProps = {};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<OwnerInfo {...setupProps} />)
}

test('renders header', () => {
  const wrapper = setup();
  const OwnerInfo = findByTestAttr(wrapper, 'owner-info');
  expect(OwnerInfo.length).toBe(1);
});

test('renders header img', () => {
  const wrapper = setup();
  const OwnerAvatar = findByTestAttr(wrapper, 'owner-avatar');
  expect(OwnerAvatar.length).toBe(1);
});

test('renders two captions for info', () => {
  const wrapper = setup();
  const Caption = findByTestAttr(wrapper, 'caption');
  expect(Caption.length).toBe(2);
})