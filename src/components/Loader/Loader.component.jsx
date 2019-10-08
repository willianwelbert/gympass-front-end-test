import React from 'react';
import Lottie from 'react-lottie';
import animationData from './loader-animation.json';

const Loader = () => {
  const defaultOptions = {
    loop          : true,
    autoplay      : true,
    animationData : animationData
  };
  return <Lottie options={defaultOptions} />;
};

export default Loader;
