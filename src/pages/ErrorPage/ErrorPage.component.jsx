import React from 'react';
import Loader from '../../components/Loader/Loader.component';
import Error from '../../components/Error/Error.component';

import {PageContainer} from './ErrorPage.styles';

const ErrorPage = ({message}) => {
  return (
    <PageContainer data-test="error-page">
      <Loader data-test="loader" displayError />
      <Error data-test="error-message" message={message} />
    </PageContainer>
  );
};

export default ErrorPage;
