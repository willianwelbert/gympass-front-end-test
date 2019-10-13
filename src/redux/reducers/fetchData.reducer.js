import { actionTypes } from '../actionTypes';

const INITIAL_STATE = {
  reposList: []
};

const fetchData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
