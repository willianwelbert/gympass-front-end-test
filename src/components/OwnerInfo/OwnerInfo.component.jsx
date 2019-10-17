import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  InfoContainer,
  Info,
  Caption,
  OwnerAvatar,
} from './OwnerInfo.styles';

const OwnerInfo = (props) => {
  const { repoCount, repoName, lastCommiter } = props
  return (
    <InfoContainer >
      <Info>
        {repoName !== ''
          ? <Caption>repository:</Caption>
          : <Caption>owner:</Caption>
        }
        {repoName ? repoName : `reactjs`}
      </Info>
      <Link to='/' style={{textDecoration: 'none', color: 'inherit'}} >
        <OwnerAvatar style={{ backgroundImage: `url("https://avatars0.githubusercontent.com/u/6412038?s=200&v=4")` }} />
      </Link>
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
  repoCount : PropTypes.number,
  repoName : PropTypes.string,
  lastCommiter : PropTypes.string,
}

export default OwnerInfo;