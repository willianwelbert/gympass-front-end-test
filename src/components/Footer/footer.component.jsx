import React from 'react';

import {FooterContainer, FooterBrandLine, FooterCopy} from './footer.styles';

const Footer = () => {
  return(
    <FooterContainer >
      <FooterBrandLine/>
      <FooterCopy>
        made with <span role='img' aria-label='brain emoji'>🧠</span>, <span role='img' aria-label='flexing arm emoji'>💪</span> and <span role='img' aria-label='red heart emoji'>❤️</span> by <a style={{color: '#FF5A49'}} href='https://github.com/willianwelbert' target='_blank' rel='noreferrer noopener'>willian welbert</a>
      </FooterCopy>
    </FooterContainer>
  )
}

export default Footer;