import {actionTypes} from '../actionTypes';

const INITIAL_STATE = {
  commits: [],
  filteredCommits : [],
  isFetchingCommits : false,
  page : 2,
}

const fetchCommit = ( state=INITIAL_STATE, action ) => {
  switch(action.type){
    case actionTypes.FETCH_COMMITS_START:
      return {
        ...state,
        isFetchingCommits: true
      };
    case actionTypes.FETCH_COMMITS_SUCCESS:
      return  {
        ...state,
        isFetchingCommits: false,
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
    case actionTypes.FETCH_MORE_COMMITS:
      return {
        ...state,
        commits: state.commits.concat(action.payload),
        page : state.page + 1
      }
    default:
      return state;
  }
};

export default fetchCommit;