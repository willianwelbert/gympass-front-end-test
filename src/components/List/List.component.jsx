import React from 'react';
import {Link} from 'react-router-dom';
import {ListContainer} from './List.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import ListItem from '../ListItem/ListItem.component';
import PropTypes from 'prop-types';

export const List = ({ listData, filteredListData, itemType }) => {

  let showData
  
  filteredListData.length > 0 ? showData = filteredListData : showData = listData

  return(
    <ListContainer data-test='list'>
      <SearchBar data-test='search-bar' itemType={itemType} />
      {showData.map( (item, idx) => {
        const { name, language, clone_url, stargazers_count, description, } = item;
        
        return clone_url 
          ? <Link key={idx} to={`/${name}`} style={{textDecoration: 'none', color: 'inherit'}} >
              <ListItem
                data-test='list-item' 
                description={description} 
                programmingLanguage={language} 
                title={name} 
                itemType='repo'
                iconInfo={stargazers_count.toString()}
              />
            </Link>
          : <ListItem
              data-test='list-item'
              key={idx}
              description={item.commit ? item.commit.message : 'no commit message'}
              iconInfo={item.author ? item.author.login : 'no commit author'}
          />;

      } )}
    </ListContainer>
  )
}

List.propTypes = {
  listData : PropTypes.array.isRequired,
}

export default List;