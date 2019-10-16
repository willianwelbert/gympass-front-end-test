import React from 'react';
import {ListContainer} from './List.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import ListItem from '../ListItem/ListItem.component';
import PropTypes from 'prop-types';

const List = (props) => {
  const { listData } = props;
  return(
    <ListContainer>
      <SearchBar />
      {listData.map( (item, idx) => {
        const { name, language, clone_url, stargazers_count } = item;
        let itemType
        clone_url ? itemType = 'repo' : itemType = false;

        return <ListItem 
                  key={idx} 
                  {...item} 
                  programmingLanguage={language} 
                  title={name} 
                  itemType={itemType}
                  iconInfo={stargazers_count}
                  />
      } )}
    </ListContainer>
  )
}

List.propTypes = {
  listData : PropTypes.array.isRequired,
}

export default List;