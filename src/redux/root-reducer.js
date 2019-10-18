import { combineReducers } from 'redux';

import toggleError from './reducers/toggleError.reducer';
import fetchData from './reducers/fetchData.reducer';
import fetchCommit from './reducers/fetchCommits.reducer';
import filterList from './reducers/filters.reducer';

export default combineReducers({
  error: toggleError,
  reposData: fetchData,
  commitsData: fetchCommit,
  filter : filterList
});
