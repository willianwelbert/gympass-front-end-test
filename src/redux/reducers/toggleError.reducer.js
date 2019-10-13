import { actionTypes } from '../actionTypes';

const INITIAL_STATE = {
  error: false
};

const toggleError = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default toggleError;
