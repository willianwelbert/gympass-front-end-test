import React from 'react';
import {Link} from 'react-router-dom';
import {ListContainer} from './List.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import ListItem from '../ListItem/ListItem.component';
import PropTypes from 'prop-types';

const List = ({ listData }) => {

  return(
    <ListContainer data-test='list'>
      <SearchBar data-test='search-bar' />
      {listData.map( (item, idx) => {
        const { name, language, clone_url, stargazers_count, description, } = item;
        
        return clone_url 
          ? <Link to={`/${name}`} style={{textDecoration: 'none', color: 'inherit'}} >
              <ListItem
                data-test='list-item'
                key={idx} 
                description={description} 
                programmingLanguage={language} 
                title={name} 
                itemType='repo'
                iconInfo={stargazers_count}
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