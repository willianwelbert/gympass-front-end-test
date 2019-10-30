import {actionTypes} from '../actionTypes';

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

export const setFilteredCommits = filteredCommits => ({
  type: actionTypes.SET_FILTERED_COMMITS,
  payload: filteredCommits
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

export const filterBySearchTerm = (searchTerm, itemType) => {
  return (dispatch, getState) => {

    let searchBase

    itemType === 'repo'
      ? searchBase = getState().reposData.reposList
      : searchBase = getState().commitsData.commits

    searchTerm = searchTerm.toLowerCase();

    const filteredResults = searchBase.filter( item => {
      if(itemType === 'repo'){
        return searchTerm !== ''
        ? item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm) 
        : item
      }

      return searchTerm !== ''
        ? item.commit.message.toLowerCase().includes(searchTerm)
        : item
    })

    itemType === 'repo'
      ? dispatch(setFilteredRepos(filteredResults))
      : dispatch(setFilteredCommits(filteredResults))

  }
}