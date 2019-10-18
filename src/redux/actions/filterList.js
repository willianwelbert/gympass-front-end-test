import {actionTypes} from '../actionTypes';

export const orderAscending = () => ({
  type: actionTypes.TOGGLE_ASCENDING_ORDERING 
});

export const orderDescending = () => ({
  type: actionTypes.TOGGLE_DESCENDING_ORDERING
})