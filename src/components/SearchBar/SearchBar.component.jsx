import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {orderReposFromAtoZ, orderReposFromZtoA, filterBySearchTerm} from '../../redux/actions/filterList';

import {ReactComponent as MagnifierIcon} from './magnifier.svg';
import {ReactComponent as AtoZ} from './alphabetical-asc.svg';
import {ReactComponent as ZtoA} from './alphabetical-des.svg';

import {SearchBarContainer, Magnifier, SearchForm, SearchInputField, OrderingIconsContainer} from './SearchBar.styles';

export const SearchBar = ({
  ascending, 
  descending, 
  orderInAscending, 
  orderInDescending,
  itemType,
  filterbySearch
}) => {

  const activeOrdering = {
    fill: '#222'
  }

  const handleChange = evt => {
    filterbySearch(evt.target.value, itemType)
  }

  //runs filter once at render, to avoid a filtered list when root route is reloaded (e.g. clicking the logo)
  useEffect( () => {
    filterbySearch('', itemType)
  }, [filterbySearch, itemType])

  return(
    <SearchBarContainer data-test='search-bar' >
      <SearchForm data-test='search-form' >
        <Magnifier htmlFor='searchField' >
          <MagnifierIcon />
        </Magnifier>
        <SearchInputField id='searchField' onChange={handleChange} />
      </SearchForm>
      {itemType === 'repo' && <OrderingIconsContainer>
        { ascending 
          ? <AtoZ style={activeOrdering} data-test='a-to-z' onClick={orderInAscending} /> 
          : <AtoZ data-test='a-to-z' onClick={orderInAscending} /> 
        }
        { descending 
          ? <ZtoA style={activeOrdering} data-test='z-to-a' onClick={orderInDescending} /> 
          : <ZtoA data-test='z-to-a' onClick={orderInDescending} />
        }
      </OrderingIconsContainer>}
    </SearchBarContainer>
  )
}

SearchBar.propTypes = {
  ascending : PropTypes.bool,
  descemdomg : PropTypes.bool
}

const mapStateToProps = state => {
  const { ascending, descending } = state.filter;
  const { reposList } = state.reposData;
  const { commits } = state.commitsData;
  return { ascending, descending, reposList, commits }
}

const mapDispatchToProps = dispatch => {
  return {
    orderInAscending : () => dispatch(orderReposFromAtoZ()),
    orderInDescending : () => dispatch(orderReposFromZtoA()),
    filterbySearch : (searchTerm, itemType) => dispatch(filterBySearchTerm(searchTerm, itemType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);