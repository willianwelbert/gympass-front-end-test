import React from 'react';
import OwnerInfo from '../components/OwnerInfo/OwnerInfo.component';
import StoryRouter from 'storybook-react-router';

export default {
  component: OwnerInfo,
  title: 'Repo Owner Info',
  decorators: [ StoryRouter() ]
}

const ownerProps = {
  repoCount: 75,
  repoName: '',
  lastCommiter: ''
};

const repoProps = {
  repoCount: 75,
  repoName: 'nice repo',
  lastCommiter: 'John Doe'
}

export const reposPage = () => 
  <OwnerInfo {...ownerProps} />

export const commitsPage = () =>
  <OwnerInfo {...repoProps} />
