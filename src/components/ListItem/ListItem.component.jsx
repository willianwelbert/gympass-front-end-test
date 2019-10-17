import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Star} from './star.svg';
import {ReactComponent as Avatar} from './github.svg';

import {
  ListItemContainer,
  TextContainer,
  ListItemTitle,
  ListItemDescription,
  ExtraInfoContainer,
  IconContainer,
  IconInfo,
  ProgrammingLanguage
} from './ListItem.styles';

const ListItem = (props) => {
  const{ title, description, itemType, iconInfo, programmingLanguage } = props;
  return(
    <ListItemContainer data-test='list-item' >
    <TextContainer>
      { title && <ListItemTitle data-test='repo-name'>{title}</ListItemTitle>}
      <ListItemDescription>{description}</ListItemDescription>
    </TextContainer>
    <ExtraInfoContainer>
      <IconContainer>
        <IconInfo data-test='icon-info'>{iconInfo}</IconInfo>
        { itemType === 'repo' ? <Star className='star' data-test='star' /> : <Avatar data-test='avatar' /> }
      </IconContainer>
      { programmingLanguage && <ProgrammingLanguage data-test='language' >{programmingLanguage}</ProgrammingLanguage>}
    </ExtraInfoContainer>
  </ListItemContainer>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  itemType: PropTypes.string,
  iconInfo: PropTypes.string,
  programmingLanguage: PropTypes.string
}

export default ListItem