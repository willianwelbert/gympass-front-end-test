import React from 'react';
import PropTypes from 'prop-types';

import {ErrorContainer} from './Error.styles';

const ErrorMessage = ({message = 'Sorry, something went wrong. Please try to refresh the page'}) => {
  return <ErrorContainer data-test='error-message'>{message}</ErrorContainer>;
};

Error.propTypes = {
  message : PropTypes.string
};

export default ErrorMessage;
