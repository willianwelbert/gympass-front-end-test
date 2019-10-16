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
        const { name, language, clone_url, stargazers_count, description } = item;
        
        return clone_url 
          ? <ListItem 
            key={idx} 
            description={description} 
            programmingLanguage={language} 
            title={name} 
            itemType='repo'
            iconInfo={stargazers_count}
            /> 
          : <ListItem 
          key={idx}
          description={item.commit.message}
          iconInfo={item.author.login}
          />;

      } )}
    </ListContainer>
  )
}

List.propTypes = {
  listData : PropTypes.array.isRequired,
}

export default List;