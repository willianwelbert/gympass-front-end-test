import {actionTypes} from '../actionTypes';

const INITIAL_STATE = {
  ascending: false,
  descending: false,
};

const filterList = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_ASCENDING_ORDERING:
      return {
        ...state,
        ascending: !state.ascending,
        descending: false
      };
    case actionTypes.TOGGLE_DESCENDING_ORDERING:
      return {
        ...state,
        descending: !state.descending,
        ascending: false
      };
    default:
      return state
  }
};

export default filterList;