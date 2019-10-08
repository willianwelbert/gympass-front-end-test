import React from 'react';
import PropTypes from 'prop-types';

import {
  InfoContainer,
  Info,
  Caption,
  OwnerAvatar,
} from './OwnerInfo.styles';

const OwnerInfo = (props) => {
  const { avatarImg, repoCount } = props
  return (
    <InfoContainer >
      <Info>
        <Caption>owner:</Caption>
        reactjs
      </Info>
      <OwnerAvatar style={{ backgroundImage: `url("${avatarImg}")` }} />
      <Info>
        <Caption>public repositories:</Caption>
        {repoCount}
      </Info>
    </InfoContainer>
  )
}

OwnerInfo.propTypes = {
  avatarImg : PropTypes.string.isRequired,
  repoCount : PropTypes.number.isRequired,
}

export default OwnerInfo;