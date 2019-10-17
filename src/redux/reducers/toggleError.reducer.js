import { actionTypes } from '../actionTypes';

const INITIAL_STATE = {
  error: false,
  errorMessage: 'error fetching data, please try refreshing the page'
};

const toggleError = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default toggleError;
