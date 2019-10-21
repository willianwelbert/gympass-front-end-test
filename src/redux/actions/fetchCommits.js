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
  type: actionTypes.TOGGLE_ERROR,
  payload: errorMessage
});

export const setLastCommiter = lastCommiter => ({
  type: actionTypes.SET_LAST_COMMITER,
  payload: lastCommiter
})

export const fetchMoreCommitsSuccess = moreCommits => ({
  type: actionTypes.FETCH_MORE_COMMITS,
  payload: moreCommits
})



export const fetchCommitsStartAsync = repoName => {
  return dispatch => {
    dispatch(fetchCommitsStart());

    axios({
      method: 'get',
      url : `https://api.github.com/repos/reactjs/${repoName}/commits`,

    })
      .then( response => {
        dispatch(fetchCommitsSuccess(response.data));
        dispatch(setLastCommiter(response.data[0].commit.author.name))
      })
      .catch( error => {
        console.log(error);
        dispatch(fetchCommitsFailure(error.response.data.message))
      })
  }
}

export const fetchMoreCommitsAsync = (repoName, pageNumber = '2' ) => {
  return dispatch => {

    axios({
      method: 'get',
      url: `https://api.github.com/repos/reactjs/${repoName}/commits?page=${pageNumber}`,

    })
    .then( response => {
      dispatch(fetchMoreCommitsSuccess(response.data));
    }).catch( error => {
      console.log(error)
    })
  }
}