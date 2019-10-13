import { actionTypes } from '../actionTypes';
import axios from 'axios';

export const fetchReposStart = () => ({
  type: actionTypes.FETCH_DATA_START
});

export const fetchReposSuccess = reposList => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: reposList
});

export const fetchReposFailure = errorMessage => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage
});

export const fetchReposStartAsync = () => {
  return dispatch => {
    dispatch(fetchReposStart());

    axios
      .get('https://api.github.com/users/reactjs/repos')
      .then(response => {
        console.log(response.data);
        dispatch(fetchReposSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchReposFailure(error));
      });
  };
};
