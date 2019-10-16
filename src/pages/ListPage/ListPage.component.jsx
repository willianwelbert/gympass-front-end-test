import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/Loader/Loader.component';
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo.component';
import List from '../../components/List/List.component';
import ErrorMessage from '../../components/Error/Error.component';

import { PageContainer } from './ListPage.styles';
import { fetchReposStartAsync } from '../../redux/actions/fetchRepos';
import { fetchCommitsStartAsync } from '../../redux/actions/fetchCommits';

export const ListPage = ( props ) => {
  
  const {
    itemType,
    repoURLParam,
    fetchReposStartAsync, 
    fetchCommitsStartAsync,
    error = false,
    reposData : { repoCount, reposList},
    commitsData : {lastCommiter, commits}
    } = props;
  
  

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
            message='error fetching data, please try refreshing the page'
          />
        </>
      ) : reposList.length === 0 ? (
        <Loader data-test='loader' />
      ) : (
        <>
          <OwnerInfo data-test='owner-info'
            repoCount={repoCount}
           />
          <List listData={reposList} />
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
            message='error fetching data, please try refreshing the page'
          />
        </>
      ) : commits.length === 0 ? (
        <Loader data-test='loader' />
      ) : (
        <>
          <OwnerInfo data-test='owner-info'
            repoName={repoURLParam}
            lastCommiter={lastCommiter}
           />
          <List listData={commits} />
        </>
      )}
    </PageContainer>
  )
};

const mapStateToProps = state => {
  const { commitsData, reposData } = state;
  return { commitsData, reposData }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReposStartAsync: () => dispatch(fetchReposStartAsync()),
    fetchCommitsStartAsync: repoURLParam => dispatch(fetchCommitsStartAsync(repoURLParam)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
