import React from 'react';
import Footer from '../components/Footer/footer.component';

import {FooterContainer, FooterBrandLine, FooterCopy} from '../components/Footer/footer.styles.jsx';

export default {
  component: Footer,
  title: 'General Footer',
};

export const basic = () => 
  <FooterContainer >
    <FooterCopy>
      made with <span role='img' aria-label='brain emoji'>🧠</span>, <span role='img' aria-label='flexing arm emoji'>💪</span> and <span role='img' aria-label='red heart emoji'>❤️</span> by <a href='https://github.com/willianwelbert' target='_blank' rel='noreferrer noopener'>willian welbert</a>
    </FooterCopy>
  </FooterContainer>


export const gympassBranded = () => 
  <FooterContainer >
    <FooterBrandLine/>
    <FooterCopy>
      made with <span role='img' aria-label='brain emoji'>🧠</span>, <span role='img' aria-label='flexing arm emoji'>💪</span> and <span role='img' aria-label='red heart emoji'>❤️</span> by <a style={{color: '#FF5A49'}} href='https://github.com/willianwelbert' target='_blank' rel='noreferrer noopener'>willian welbert</a>
    </FooterCopy>
  </FooterContainer>