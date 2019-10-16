import React from 'react';
import PropTypes from 'prop-types';

import {
  InfoContainer,
  Info,
  Caption,
  OwnerAvatar,
} from './OwnerInfo.styles';

const OwnerInfo = (props) => {
  const { avatarImg, repoCount, repoName, lastCommiter } = props
  return (
    <InfoContainer >
      <Info>
        {repoName !== ''
          ? <Caption>repository:</Caption>
          : <Caption>owner:</Caption>
        }
        {repoName ? repoName : `reactjs`}
      </Info>
      <OwnerAvatar style={{ backgroundImage: `url("${avatarImg}")` }} />
      <Info>
        {lastCommiter
          ? <Caption>last commiter:</Caption>
          : <Caption>public repos:</Caption>
        }
        {lastCommiter ? lastCommiter : repoCount}
      </Info>
    </InfoContainer>
  )
}

OwnerInfo.propTypes = {
  avatarImg : PropTypes.string.isRequired,
  repoCount : PropTypes.number,
  repoName : PropTypes.string,
  lastCommiter : PropTypes.string,
}

export default OwnerInfo;