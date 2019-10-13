import { actionTypes } from '../actionTypes';

const INITIAL_STATE = {
  reposList: [],
  isFetching: false,
  errorMessage: undefined
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
        isFetching: false,
        errorMessage: action.payload
      };
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        reposList: [{ description: 'repoOne' }, { description: 'test2' }]
      };
    default:
      return state;
  }
};

export default fetchData;
