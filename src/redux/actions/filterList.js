import {actionTypes} from '../actionTypes';

import {fetchReposSuccess} from '../actions/fetchRepos';

export const orderAscending = () => ({
  type: actionTypes.TOGGLE_ASCENDING_ORDERING 
});

export const orderDescending = () => ({
  type: actionTypes.TOGGLE_DESCENDING_ORDERING
})

export const orderReposFromAtoZ = () => {
  return (dispatch, getState) => {
    dispatch(orderAscending());

    const repos = getState().reposData.reposList;

    const orderedRepos = repos.sort( (a,b) => {

      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;

    } )

    dispatch(fetchReposSuccess(orderedRepos))

  }
}

export const orderReposFromZtoA = () => {
  return (dispatch, getState) => {
    dispatch(orderDescending());

    const repos = getState().reposData.reposList;

    const orderedRepos = repos.sort( (a,b) => {

      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;

    } )

    dispatch(fetchReposSuccess(orderedRepos))

  }
}