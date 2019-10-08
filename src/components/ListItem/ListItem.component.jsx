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
    <ListItemContainer>
    <TextContainer>
      { title && <ListItemTitle>{title}</ListItemTitle>}
      <ListItemDescription>{description}</ListItemDescription>
    </TextContainer>
    <ExtraInfoContainer>
      <IconContainer>
        <IconInfo>{iconInfo}</IconInfo>
        { itemType === 'repo' ? <Star className='star' /> : <Avatar/> }
      </IconContainer>
      { programmingLanguage && <ProgrammingLanguage>{programmingLanguage}</ProgrammingLanguage>}
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