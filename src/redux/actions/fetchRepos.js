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

export const setRepoCount = repoCount => ({
  type: actionTypes.SET_REPO_COUNT,
  payload: repoCount
});

export const setAvatarImg = avatarImg => ({
  type: actionTypes.SET_AVATAR_IMG,
  payload: avatarImg
})

export const fetchReposStartAsync = () => {
  return dispatch => {
    dispatch(fetchReposStart());

    axios
      .get('https://api.github.com/users/reactjs')
      .then( response => {
        console.log('general data', response);
        dispatch(setRepoCount(response.data.public_repos));
        dispatch(setAvatarImg(response.data.avatar_url))
      } )

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
