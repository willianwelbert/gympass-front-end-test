import React from 'react';
import Loader from '../components/Loader/Loader.component.jsx';

import {LoaderContainer, LoaderCaption} from '../components/Loader/Loader.styles'

export default {
  component: Loader,
  title: 'Loader'
}

export const regular = () =>
  <LoaderContainer>
    <Loader />
    <LoaderCaption>working <span style={{color: '#18ccc0'}}>(out)</span> on it...</LoaderCaption>
  </LoaderContainer>;
