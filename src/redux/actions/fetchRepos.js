import { actionTypes } from '../actionTypes';
import {orderAscending} from '../actions/filterList'
import axios from 'axios';

export const fetchReposStart = () => ({
  type: actionTypes.FETCH_DATA_START
});

export const fetchReposSuccess = reposList => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: reposList
});

export const fetchReposFailure = errorMessage => ({
  type: actionTypes.TOGGLE_ERROR,
  payload: errorMessage
});

export const setRepoCount = repoCount => ({
  type: actionTypes.SET_REPO_COUNT,
  payload: repoCount
});

export const fetchReposStartAsync = () => {
  return dispatch => {
    dispatch(fetchReposStart());

    axios
      .get('https://api.github.com/users/reactjs')
      .then( response => {
        dispatch(setRepoCount(response.data.public_repos));
      } )

    axios
      .get('https://api.github.com/users/reactjs/repos')
      .then(response => {
        dispatch(orderAscending())
        dispatch(fetchReposSuccess(response.data));
        
      })
      .catch(error => {
        dispatch(fetchReposFailure(error.response.data.message));
      });
  };
};
