import React from 'react';
import Lottie from 'react-lottie';
import loaderAnimation from './loader-animation.json';
import errorAnimation from './error-animation.json';

import {LoaderContainer, LoaderCaption} from './Loader.styles';

const Loader = ({displayError}) => {
  const defaultOptions = {
    loop             : true,
    autoplay         : true,
    animationData    : displayError ? errorAnimation : loaderAnimation,
    rendererSettings : {
      preserveAspectRatio : 'xMidYMid sliced'
    }
  };

  return (
    <LoaderContainer>
      <Lottie options={defaultOptions} height="300px" />
      {displayError ? (
        <LoaderCaption>Oops...</LoaderCaption>
      ) : (
        <LoaderCaption>
          working <span style={{color: '#18ccc0'}}> (out) </span> on it...
        </LoaderCaption>
      )}
    </LoaderContainer>
  );
};

export default Loader;
