import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../testUtils';

import ListItem from './ListItem.component';

const defaultProps = {
  description: 'required description on each list item'
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props};
  return shallow(<ListItem {...setupProps} />)
}

test('renders list item', () => {
  const wrapper = setup();
  const ListItem = findByTestAttr(wrapper, 'list-item');
  expect(ListItem.length).toBe(1)
});

test('renders title if prop is available', () => {
  const wrapper = setup({ title : 'repo title' });
  const RepoTitle = findByTestAttr(wrapper, 'repo-name');
  expect(RepoTitle.length).toBe(1)
});

test('renders info text related to icon if prop is available', () => {
  const wrapper = setup({ iconInfo : 'lala' });
  const iconInfo = findByTestAttr(wrapper, 'icon-info');
  expect(iconInfo.length).toBe(1);
});

describe('star or avatar conditional rendering', () => {
  test('renders star on itemType prop repo', () => {
    let wrapper = setup({ itemType: 'repo' });
    const StarComponent = findByTestAttr(wrapper, 'star');
    expect(StarComponent.length).toBe(1);
  });

  test('renders avatar on itemType prop NOT repo', () => {
    let wrapper = setup({ itemType: undefined });
    const StarComponent = findByTestAttr(wrapper, 'star');
    const AvatarComponent = findByTestAttr(wrapper, 'avatar');
    expect(AvatarComponent.length).toBe(1);
    expect(StarComponent.length).toBe(0);
  });
});

test('renders programming language if prop is available', () => {
  const wrapper = setup({ programmingLanguage : 'javascript' });
  const ProgrammingLanguage = findByTestAttr(wrapper, 'language');
  expect(ProgrammingLanguage.length).toBe(1);
});
