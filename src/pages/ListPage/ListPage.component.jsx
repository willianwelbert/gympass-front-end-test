import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader.component';
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo.component';
import List from '../../components/List/List.component';
import ErrorMessage from '../../components/Error/Error.component';

import { PageContainer } from './ListPage.styles';
import { fetchReposStartAsync } from '../../redux/actions/fetchRepos';
import { fetchCommitsStartAsync, fetchMoreCommitsAsync } from '../../redux/actions/fetchCommits';

export const ListPage = ( props ) => {
  
  const {
    itemType,
    repoURLParam,
    fetchReposStartAsync, 
    fetchCommitsStartAsync,
    fetchMoreCommitsAsync,
    reposData : { isFetchingRepos, repoCount, reposList, filteredReposList},
    commitsData : {isFetchingCommits, lastCommiter, commits, filteredCommits, page},
    error : { error, errorMessage }
    } = props;
  
  const handleLoadMore = () => {
    fetchMoreCommitsAsync(repoURLParam, page)
  }

  useEffect(() => {
    itemType === 'repo'
      ? fetchReposStartAsync()
      : fetchCommitsStartAsync(repoURLParam);

  }, [itemType, repoURLParam, fetchReposStartAsync, fetchCommitsStartAsync]);
  
  return itemType === 'repo'
    ? (
    <PageContainer data-test='list-page'>
      {error && reposList.length === 0 ? (
        <>
          <Loader data-test='loader' displayError />
          <ErrorMessage
            data-test='error-message'
            message={errorMessage}
          />
        </>
      ) : isFetchingRepos ? (
        <Loader data-test='loader' />
      ) : (
        <>
          <OwnerInfo data-test='owner-info'
            repoCount={repoCount}
           />
          <List listData={reposList} filteredListData={filteredReposList} data-test='repository-list' itemType='repo' />
        </>
      )}
    </PageContainer>
  ) : (
    <PageContainer data-test='list-page'>
      {error && commits.length === 0 ? (
        <>
          <Loader data-test='loader' displayError />
          <ErrorMessage
            data-test='error-message'
            message={errorMessage}
          />
        </>
      ) : isFetchingCommits ? (
        <Loader data-test='loader' />
      ) : (
        <>
          <OwnerInfo data-test='owner-info'
            repoName={repoURLParam}
            lastCommiter={lastCommiter}
           />
         
            <List 
              listData={commits} 
              filteredListData={filteredCommits} 
              data-test='commits-list' 
              itemType='commits'
              handleLoadMore={handleLoadMore}
               />
         

          
        </>
      )}
    </PageContainer>
  )
};

const mapStateToProps = state => {
  const { commitsData, reposData, error } = state;
  return { commitsData, reposData, error }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReposStartAsync: () => dispatch(fetchReposStartAsync()),
    fetchCommitsStartAsync: repoURLParam => dispatch(fetchCommitsStartAsync(repoURLParam)),
    fetchMoreCommitsAsync : (repoURLParam, pageNumber) => dispatch(fetchMoreCommitsAsync(repoURLParam, pageNumber))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
