import React from 'react';
import {ListContainer} from './List.styles';
import ListItem from '../ListItem/ListItem.component';
import PropTypes from 'prop-types';

const List = (props) => {
  const { listData } = props;
  return(
    <ListContainer>
      {listData.map( (item, idx) => <ListItem key={idx} {...item} /> )}
    </ListContainer>
  )
}

List.propTypes = {
  listData : PropTypes.array.isRequired,
}

export default List;