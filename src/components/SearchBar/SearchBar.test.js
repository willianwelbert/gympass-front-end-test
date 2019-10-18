import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../testUtils';

import {SearchBar} from './SearchBar.component';

const defaultProps = {};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow( <SearchBar {...setupProps} /> )
}

test('renders seachbar', () => {
  const wrapper = setup();
  const SearchBarComponent = findByTestAttr(wrapper, 'search-bar');
  expect(SearchBarComponent.length).toBe(1);
});

test('renders form', () => {
  const wrapper = setup();
  const SearchFormComponent = findByTestAttr(wrapper, 'search-form');
  expect(SearchFormComponent.length).toBe(1);
});

describe('ascending and descending filters', () => {
  
  test('renders filters', () => {
    const wrapper = setup();
    const AtoZComponent = findByTestAttr(wrapper, 'a-to-z');
    const ZtoAComponent = findByTestAttr(wrapper, 'z-to-a');
    expect(AtoZComponent.length).toBe(1);
    expect(ZtoAComponent.length).toBe(1);
  });

})