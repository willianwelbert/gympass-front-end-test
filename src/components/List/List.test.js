import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../testUtils';

import List from './List.component';

const defaultProps = {
  listData : []
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow( <List {...setupProps} /> )
}

test('renders list', () => {
  const wrapper = setup();
  const ListComponent = findByTestAttr(wrapper, 'list');
  expect(ListComponent.length).toBe(1)
});

test('renders searchBar', () => {
  const wrapper = setup();
  const SearchBar = findByTestAttr(wrapper, 'search-bar');
  expect(SearchBar.length).toBe(1)
})

test('does NOT render an empty list', () => {
  const wrapper = setup({listData : ['a', 'b']});
  const ListItem = findByTestAttr(wrapper, 'list-item');
  expect(ListItem.length).not.toBe(0);
})