import React from 'react';
import ListItem from '../components/ListItem/ListItem.component';

export default {
  component: ListItem,
  title: 'List Item'
}

const repoProps = {
  title: 'Repo Name',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
  itemType: 'repo',
  iconInfo: '543',
  programmingLanguage: 'javascript',
}

const commitProps = {
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat, accusantium consectetur ab ratione consequuntur',
  iconInfo: 'willianwelbert',
}

export const repo = () => 
  <ListItem {...repoProps} />

export const commit = () => 
  <ListItem {...commitProps} />