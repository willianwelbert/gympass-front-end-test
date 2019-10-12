import React from 'react';
import Loader from '../../components/Loader/Loader.component';
import Error from '../../components/Error/Error.component';

import { PageContainer } from './ErrorPage.styles';

const ErrorPage = () => {

  return(
    <PageContainer data-test='error-page'>
      <Loader data-test='loader' displayError />
      <Error data-test='error-message' message='404 Page not found' />
    </PageContainer>
  )

}

export default ErrorPage;