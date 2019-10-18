import { actionTypes } from '../actionTypes';

const INITIAL_STATE = {
  reposList: [],
  isFetching: false,
};

const fetchData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        reposList: action.payload
      };
    case actionTypes.SET_FILTERED_REPOS:
      return {
        ...state,
        reposList : action.payload
      }
    case actionTypes.SET_REPO_COUNT:
      return {
        ...state,
        repoCount: action.payload
      };
    default:
      return state;
  }
};

export default fetchData;
