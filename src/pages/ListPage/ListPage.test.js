import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils';

import ListPage from './ListPage.component';

describe('renders page and components properly', () => {
  const defaultProps = {
    error: false,
    reposList: []
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

  test('renders error loader if error props are passed', () => {
    const wrapper = setup({ error: true });
    const LoaderComponent = findByTestAttr(wrapper, 'loader');
    expect(LoaderComponent.prop('displayError')).toBe(true);
  });

  test('does NOT render loader if data props are passed', () => {
    const wrapper = setup({ reposList: ['test'] });
    const LoaderComponent = findByTestAttr(wrapper, 'loader');
    expect(LoaderComponent.length).toBe(0);
  });

  test('render error message if props are passed', () => {
    const wrapper = setup({ error: true });
    const ErrorMessage = findByTestAttr(wrapper, 'error-message');
    expect(ErrorMessage.length).toBe(1);
  });

  test('does NOT render an empty error message', () => {
    const wrapper = setup({ error: true });
    const ErrorMessage = findByTestAttr(wrapper, 'error-message');
    expect(ErrorMessage.prop('message')).not.toBe('');
  });

  test('renders owner info/header after data fetch', () => {
    const wrapper = setup({ reposList: ['testRepo'] });
    const HeaderComponent = findByTestAttr(wrapper, 'owner-info');
    expect(HeaderComponent.length).toBe(1);
  });
});
