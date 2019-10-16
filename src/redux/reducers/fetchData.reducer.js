import { actionTypes } from '../actionTypes';

const INITIAL_STATE = {
  reposList: [],
  isFetching: false,
  errorMessage: ''
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
    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        errorMessage: action.payload
      };
    case actionTypes.SET_REPO_COUNT:
      return {
        ...state,
        repoCount: action.payload
      };
    case actionTypes.SET_AVATAR_IMG:
        return {
          ...state,
          avatarImg: action.payload
        }
    default:
      return state;
  }
};

export default fetchData;
