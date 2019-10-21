import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  HeaderContainer,
  InfoContainer,
  Info,
  Caption,
  OwnerAvatar,
} from './OwnerInfo.styles';

const OwnerInfo = (props) => {
  const { repoCount, repoName, lastCommiter } = props
  return (
    <HeaderContainer>
      <InfoContainer data-test='owner-info' >
        <Info>
          {repoName !== ''
            ? <Caption data-test='caption' >repository:</Caption>
            : <Caption data-test='caption' >owner:</Caption>
          }
          {repoName ? repoName : `reactjs`}
        </Info>
        <Info>
          <Link to='/' style={{textDecoration: 'none', color: 'inherit'}} >
            <OwnerAvatar data-test='owner-avatar' style={{ backgroundImage: `url("https://avatars0.githubusercontent.com/u/6412038?s=200&v=4")` }} />
          </Link>
        </Info>
        <Info>
          {lastCommiter
            ? <Caption data-test='caption' >last commiter:</Caption>
            : <Caption data-test='caption' >public repos:</Caption>
          }
          {lastCommiter ? lastCommiter : repoCount}
        </Info>
      </InfoContainer>
    </HeaderContainer>
  )
}

OwnerInfo.propTypes = {
  repoCount : PropTypes.number,
  repoName : PropTypes.string,
  lastCommiter : PropTypes.string,
}

export default OwnerInfo;