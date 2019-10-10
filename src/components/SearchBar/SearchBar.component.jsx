import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as MagnifierIcon} from './magnifier.svg';
import {ReactComponent as AtoZ} from './alphabetical-asc.svg';
import {ReactComponent as ZtoA} from './alphabetical-des.svg';

import {SearchBarContainer, Magnifier, SearchForm, SearchInputField, OrderingIconsContainer} from './SearchBar.styles';

const SearchBar = ({ascending, descending}) => {

  const activeOrdering = {
    fill: '#222'
  }

  return(
    <SearchBarContainer>
      <Magnifier>
        <MagnifierIcon />
      </Magnifier>
      <SearchForm>
        <SearchInputField />
      </SearchForm>
      <OrderingIconsContainer>
        { ascending ? <AtoZ style={activeOrdering} /> : <AtoZ /> }
        { descending ? <ZtoA style={activeOrdering} /> : <ZtoA />}
      </OrderingIconsContainer>
    </SearchBarContainer>
  )
}

export default SearchBar;