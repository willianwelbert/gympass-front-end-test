import React from 'react';
import {SearchBar} from '../components/SearchBar/SearchBar.component';

export default {
  component: SearchBar,
  title: 'SearchBar'
}

export const regular = () =>
  <SearchBar />

export const ascendingActive = () =>
  <SearchBar ascending />

export const descendingActive = () =>
  <SearchBar descending />