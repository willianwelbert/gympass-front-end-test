import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../testUtils';

import ErrorPage from './ErrorPage.component';

describe('renders page and components properly', () => {
  
  const defaultProps = {error: true};

  const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<ErrorPage {...setupProps}/>)
  }
  
  test('renders page', () => {
    const wrapper = setup();
    const pageComponent = findByTestAttr(wrapper, 'error-page');
    expect(pageComponent.length).toBe(1);
  });

  test('renders loader element', () => {
    const wrapper = setup();
    const loaderComponent = findByTestAttr(wrapper, 'loader');
    expect(loaderComponent.length).toBe(1);
  });

  test('renders loader with error prop', () => {
    const wrapper = setup();
    const loaderComponent = findByTestAttr(wrapper, 'loader');
    expect(loaderComponent.prop('displayError')).toBe(true);
  })

  test('renders error message', () => {
    const wrapper = setup();
    const errorMessageComponent = findByTestAttr(wrapper, 'error-message');
    expect(errorMessageComponent.length).toBe(1);
  })

  test('does not render empty error message', () => {
    const wrapper = setup();
    const errorMessageComponent = findByTestAttr(wrapper, 'error-message');
    expect(errorMessageComponent.prop('message')).not.toBe('');
  })

})