import React from 'react';
import {SearchBar} from '../components/SearchBar/SearchBar.component';
import {filterRepoBySearchTerm} from '../redux/actions/filterList';

export default {
  component: SearchBar,
  title: 'SearchBar',
}

const filterbySearch = () => {
  filterRepoBySearchTerm('', 'repo')
}

export const regular = () =>
  <SearchBar filterbySearch={filterbySearch} />

export const ascendingActive = () =>
  <SearchBar ascending itemType='repo' filterbySearch={filterbySearch} />

export const descendingActive = () =>
  <SearchBar descending itemType='repo' filterbySearch={filterbySearch} />