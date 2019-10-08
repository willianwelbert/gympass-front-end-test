import React from 'react';
import OwnerInfo from '../components/OwnerInfo/OwnerInfo.component';

export default {
  component: OwnerInfo,
  title: 'Repo Owner Info'
}

const ownerProps = {
  avatarImg: 'https://avatars3.githubusercontent.com/u/6412038?v=4',
  repoCount: 75
}

export const regular = () => 
  <OwnerInfo {...ownerProps} />
