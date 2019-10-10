import React from 'react';
import PropTypes from 'prop-types';

import {
  InfoContainer,
  Info,
  Caption,
  OwnerAvatar,
} from './OwnerInfo.styles';

const OwnerInfo = (props) => {
  const { avatarImg, repoCount, repoName, commitCount } = props
  return (
    <InfoContainer >
      <Info>
        {repoName 
          ? <Caption>repository:</Caption>
          : <Caption>owner:</Caption>
        }
        {repoName ? repoName : `reactjs`}
      </Info>
      <OwnerAvatar style={{ backgroundImage: `url("${avatarImg}")` }} />
      <Info>
        {commitCount
          ? <Caption>nº of commits:</Caption>
          : <Caption>public repos:</Caption>
        }
        {commitCount ? commitCount : repoCount}
      </Info>
    </InfoContainer>
  )
}

OwnerInfo.propTypes = {
  avatarImg : PropTypes.string.isRequired,
  repoCount : PropTypes.number,
  repoName : PropTypes.string,
  commitCount : PropTypes.number,
}

export default OwnerInfo;