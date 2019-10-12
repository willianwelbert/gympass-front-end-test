import React from 'react';
import Loader from '../../components/Loader/Loader.component';
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo.component';
import List from '../../components/List/List.component';
import ErrorMessage from '../../components/Error/Error.component';

import { PageContainer } from '../ErrorPage/ErrorPage.styles';

const ListPage = ({
  error = false,
  reposList = [{ description: 'loren ipsum dolor sit amet' }],
  avatarImg = 'https://avatars3.githubusercontent.com/u/6412038?v=4'
}) => {
  return (
    <PageContainer data-test='list-page'>
      {error && reposList.length === 0 ? (
        <div>
          <Loader data-test='loader' displayError />
          <ErrorMessage
            data-test='error-message'
            message='error fetching data, please try refreshing the page'
          />
        </div>
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

export default ListPage;
