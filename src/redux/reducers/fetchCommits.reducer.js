import {actionTypes} from '../actionTypes';

const INITIAL_STATE = {
  commits: [],
  filteredCommits : []
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
    case actionTypes.SET_FILTERED_COMMITS:
      return {
        ...state,
        filteredCommits: action.payload
      }
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