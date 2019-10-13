import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/Loader/Loader.component';
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo.component';
import List from '../../components/List/List.component';
import ErrorMessage from '../../components/Error/Error.component';

import { PageContainer } from '../ErrorPage/ErrorPage.styles';
import { actionTypes } from '../../redux/actionTypes';

const ListPage = ({
  error = false,
  reposList = [],
  avatarImg = 'https://avatars3.githubusercontent.com/u/6412038?v=4',
  fetchData
}) => {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line import/no-extraneous-dependencies
  }, [fetchData]);

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
          <OwnerInfo data-test='owner-info' avatarImg={avatarImg} />
          <List listData={reposList} />
        </>
      )}
    </PageContainer>
  );
};

const mapStateToProps = state => {
  const { reposList } = state;
  return reposList;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch({ type: actionTypes.FETCH_DATA })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
