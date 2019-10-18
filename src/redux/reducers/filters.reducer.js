import {actionTypes} from '../actionTypes';

const INITIAL_STATE = {
  ascending: true,
  descending: false,
};

const filterList = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_ASCENDING_ORDERING:
      return {
        ...state,
        ascending: true,
        descending: false,
      };
    case actionTypes.TOGGLE_DESCENDING_ORDERING:
      return {
        ...state,
        descending: true,
        ascending: false
      };
    default:
      return state
  }
};

export default filterList;