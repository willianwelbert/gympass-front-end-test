import React from 'react';
import List from '../components/List/List.component';

export default {
  component: List,
  title: 'List'
}

const repoList = {
  listData : [
  {
    name: 'Repo One',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    stargazers_count: '123',
    language: 'javascript',
    clone_url : true
  },
  {
    name: 'Repo Two',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    stargazers_count: '123',
    language: 'javascript',
    clone_url : true
  },
  {
    name: 'Repo Three',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    stargazers_count: '123',
    language: 'javascript',
    clone_url : true
  },
  {
    name: 'Repo Four',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    stargazers_count: '123',
    language: 'C#',
    clone_url : true
  },
  {
    name: 'Repo Five',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
    stargazers_count: '123',
    language: 'javascript',
    clone_url : true
  },
]};

const commitsList = {
  listData : [
    {
      commit : {
        message : 'loren ipsum dolor sit amet'
      },
      author : {
        login: 'willianwelbert'
      }
    },
    {
      commit : {
        message : 'loren ipsum dolor sit amet'
      },
      author : {
        login: 'reactjs'
      }
    },
    {
      commit : {
        message : 'loren ipsum dolor sit amet'
      },
      author : {
        login: 'gympass'
      }
    },
  ]
}

export const repos = () => 
  <List {...repoList} />

export const commits = () => 
  <List {...commitsList} />