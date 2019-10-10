import React from 'react';
import Loader from '../components/Loader/Loader.component.jsx';

export default {
  component: Loader,
  title: 'Loader'
}

export const regular = () =>
    <Loader />
    

export const error = () =>
    <Loader displayError />
    