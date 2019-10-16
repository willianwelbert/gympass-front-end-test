import {actionTypes} from '../actionTypes';
import axios from 'axios';

export const fetchCommitsStart = () => ({
  type: actionTypes.FETCH_COMMITS_START
});

export const fetchCommitsSuccess = commitsList => ({
  type: actionTypes.FETCH_COMMITS_SUCCESS,
  payload: commitsList
});

export const fetchCommitsFailure = errorMessage => ({
  type: actionTypes.FETCH_COMMITS_FAILURE,
  payload: errorMessage
});

export const setLastCommiter = lastCommiter => ({
  type: actionTypes.SET_LAST_COMMITER,
  payload: lastCommiter
})



export const fetchCommitsStartAsync = repoName => {
  return dispatch => {
    dispatch(fetchCommitsStart());

    axios.get(`https://api.github.com/repos/reactjs/${repoName}/commits`)
      .then( response => {
        console.log(response.data, 'commits response');
        dispatch(fetchCommitsSuccess(response.data));
        dispatch(setLastCommiter(response.data[0].commit.author.name))
      })
      .catch( error => {
        console.log(error);
        dispatch(fetchCommitsFailure(error))
      })
  }
}