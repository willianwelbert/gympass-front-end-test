import {actionTypes} from '../actionTypes';

const INITIAL_STATE = {
  commits: [],
}

const fetchCommit = ( state=INITIAL_STATE, action ) => {
  switch(action.type){
    case actionTypes.FETCH_COMMITS_START:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_COMMITS_SUCCESS:
      return  {
        ...state,
        isFetching: false,
        commits: action.payload,
      };
    case actionTypes.FETCH_COMMITS_FAILURE:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case actionTypes.SET_LAST_COMMITER:
      return {
        ...state,
        lastCommiter: action.payload,
      }
    default:
      return state;
  }
};

export default fetchCommit;