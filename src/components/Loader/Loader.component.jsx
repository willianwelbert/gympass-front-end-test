import React from 'react';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import loaderAnimation from './loader-animation.json';
import errorAnimation from './error-animation.json';

import { LoaderContainer, LoaderCaption, AnimationCredits } from './Loader.styles';

export const Loader = ({ displayError }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: displayError ? errorAnimation : loaderAnimation
  };

  return (
    <LoaderContainer data-test='loader' >
      <Lottie options={defaultOptions} height='300px' />
      {displayError ? (
        <LoaderCaption data-test='loader-caption'>Oops...</LoaderCaption>
      ) : (
        <>
        <LoaderCaption data-test='loader-caption'>
          working <span style={{ color: '#18ccc0' }}> (out) </span> on it...
        </LoaderCaption>
        <AnimationCredits>animação por Bruno Alves / lottiefiles</AnimationCredits>
        </>
      )}
    </LoaderContainer>
  );
};

const mapStateToProps = state => {
  const { error } = state;
  return error;
};

export default connect(mapStateToProps)(Loader);
