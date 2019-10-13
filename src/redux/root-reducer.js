import { combineReducers } from 'redux';

import toggleError from './reducers/toggleError.reducer';
import fetchData from './reducers/fetchData.reducer';

export default combineReducers({
  error: toggleError,
  reposList: fetchData
});
