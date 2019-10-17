import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils';

import { ListPage } from './ListPage.component';

describe('renders page and components properly', () => {
  let defaultProps = {
    error: false, 
    reposData : { 
      repoCount : 0, 
      reposList : []
    },
    commitsData : {
      lastCommiter : 'John Doe',
      commits: []
    }
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ListPage {...setupProps} />);
  };

  test('renders page', () => {
    const wrapper = setup();
    const PageComponent = findByTestAttr(wrapper, 'list-page');
    expect(PageComponent.length).toBe(1);
  });

  test('renders loader', () => {
    const wrapper = setup();
    const LoaderComponent = findByTestAttr(wrapper, 'loader');
    expect(LoaderComponent.length).toBe(1);
  });

  test('does NOT render loader if data props are passed', () => {
    const wrapper = setup({
      itemType : 'repo', 
      reposData : { 
        reposList : ['a', 'b']
      } });
    const LoaderComponent = findByTestAttr(wrapper, 'loader');
    expect(LoaderComponent.length).toBe(0);
  });

  test('renders owner info/header after data fetch', () => {
    const wrapper = setup({
      itemType : 'repo', 
      reposData : { 
        reposList : ['a', 'b']
      } });
    const HeaderComponent = findByTestAttr(wrapper, 'owner-info');
    expect(HeaderComponent.length).toBe(1);
  });

  test('renders list with repo props when type is repo', () => {
    const wrapper = setup({
      itemType : 'repo', 
      reposData : { 
        reposList : ['a', 'b']
      } });
    const ListComponent = findByTestAttr(wrapper, 'repository-list');
    expect(ListComponent.length).toBe(1);
  });

  test('renders list with commits props when type is not repo', () => {
    const wrapper = setup({
      commitsData : {
        commits : ['first', 'second']
      }
    });
    const ListComponent = findByTestAttr(wrapper, 'commits-list');
    expect(ListComponent.length).toBe(1);
  })

});
