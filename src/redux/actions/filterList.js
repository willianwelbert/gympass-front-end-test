import {actionTypes} from '../actionTypes';

import {fetchReposSuccess} from '../actions/fetchRepos';

export const orderAscending = () => ({
  type: actionTypes.TOGGLE_ASCENDING_ORDERING 
});

export const orderDescending = () => ({
  type: actionTypes.TOGGLE_DESCENDING_ORDERING
})

export const setFilteredRepos = filteredRepos => ({
  type: actionTypes.SET_FILTERED_REPOS,
  payload: filteredRepos
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

    dispatch(setFilteredRepos(orderedRepos))

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

    dispatch(setFilteredRepos(orderedRepos))

  }
}

export const filterRepoBySearchTerm = (searchTerm) => {
  return (dispatch, getState) => {

    const repos = getState().reposData.reposList;

    const filteredResults = repos.filter( repo => {
      return repo.name.includes(searchTerm) || repo.description.includes(searchTerm) 
    })

    dispatch(setFilteredRepos(filteredResults))

  }
}