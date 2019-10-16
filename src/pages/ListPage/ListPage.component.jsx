import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/Loader/Loader.component';
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo.component';
import List from '../../components/List/List.component';
import ErrorMessage from '../../components/Error/Error.component';

import { PageContainer } from './ListPage.styles';
import { fetchReposStartAsync } from '../../redux/actions/fetchRepos';

export const ListPage = ({
  error = false,
  reposList = [],
  repoCount,
  avatarImg = '',
  fetchReposStartAsync
}) => {
  useEffect(() => {
    fetchReposStartAsync();
  }, [fetchReposStartAsync]);

  return (
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
          <OwnerInfo data-test='owner-info' avatarImg={avatarImg} repoCount={repoCount} />
          <List listData={reposList} />
        </>
      )}
    </PageContainer>
  );
};

const mapStateToProps = state => {
  return state.reposData;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReposStartAsync: () => dispatch(fetchReposStartAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
