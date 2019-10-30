import React from 'react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {ListContainer} from './List.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import ListItem from '../ListItem/ListItem.component';
import PropTypes from 'prop-types';

export const List = ({ listData, filteredListData = [], itemType, handleLoadMore }) => {

  let showData
  
  filteredListData.length > 0 ? showData = filteredListData : showData = listData

  return(
    <ListContainer data-test='list'>
      <SearchBar data-test='search-bar' itemType={itemType} />

      {itemType === 'repo'
        ? (
          showData.map( (item, idx) => {
            const { name, language, stargazers_count, description, } = item;
            
            return (
              <Link key={idx} to={`/${name}`} style={{textDecoration: 'none', color: 'inherit'}} >
                <ListItem
                  data-test='list-item' 
                  description={description} 
                  programmingLanguage={language} 
                  title={name} 
                  itemType='repo'
                  iconInfo={stargazers_count.toString()}
                />
              </Link>)
          } )
        )
        : (
          <InfiniteScroll
            dataLength={listData.length}
            next={handleLoadMore}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollThreshold={1}
            initialScrollY={0}
          >
            {showData.map( (item, idx) => {
              return <ListItem
                data-test='list-item'
                key={idx}
                description={item.commit ? item.commit.message : 'no commit message'}
                iconInfo={item.author ? item.author.login : 'no commit author'}
              />
            })}
          </InfiniteScroll>
        )}

      
    </ListContainer>
  )
}

List.propTypes = {
  listData : PropTypes.array.isRequired,
}

export default List;