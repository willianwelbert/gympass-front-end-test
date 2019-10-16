import React from 'react';
import OwnerInfo from '../components/OwnerInfo/OwnerInfo.component';

export default {
  component: OwnerInfo,
  title: 'Repo Owner Info'
}

const ownerProps = {
  avatarImg: 'https://avatars3.githubusercontent.com/u/6412038?v=4',
  repoCount: 75
};

const repoProps = {
  avatarImg: 'https://avatars3.githubusercontent.com/u/6412038?v=4',
  repoCount: 75,
  repoName: 'nice repo',
  lastCommiter: 'John Doe'
}

export const reposPage = () => 
  <OwnerInfo {...ownerProps} />

export const commitsPage = () =>
  <OwnerInfo {...repoProps} />
