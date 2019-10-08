import React from 'react';
import List from '../components/List/List.component';

export default {
  component: List,
  title: 'List'
}

const repoList = {
  listData : [
  {
    title: 'Repo One',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    itemType: 'repo',
    iconInfo: '123',
    programmingLanguage: 'javascript',
  },
  {
    title: 'Repo Two',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    itemType: 'repo',
    iconInfo: '123',
    programmingLanguage: 'javascript',
  },
  {
    title: 'Repo Three',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    itemType: 'repo',
    iconInfo: '123',
    programmingLanguage: 'javascript',
  },
  {
    title: 'Repo Four',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    itemType: 'repo',
    iconInfo: '123',
    programmingLanguage: 'C#',
  },
  {
    title: 'Repo Five',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    itemType: 'repo',
    iconInfo: '123',
    programmingLanguage: 'javascript',
  },
]};

const commitsList = {
  listData : [
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
      iconInfo: 'willianwelbert',
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
      iconInfo: 'reactjs',
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
      iconInfo: 'gympass',
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
      iconInfo: 'gaearon',
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
      iconInfo: 'alexkrolick',
    },
  ]
}

export const repos = () => 
  <List {...repoList} />

export const commits = () => 
  <List {...commitsList} />