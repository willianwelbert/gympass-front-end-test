import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 80%;
  margin: 0 auto;
  line-height: 2rem;
`

export default {
  title: 'Gympass',
};

export const toStorybook = () => 
  <WelcomeContainer>
    <h1 style={{color: '#FF5A49'}}>Gympass Front End Test Storybook</h1>
    <h5 style={{textAlign: 'right'}} >Willian Welbert</h5>
    <p>Este Storybook (o meu primeiro), agrupa os componentes desenvolvidos para o teste de Front End do Gympass.</p>
    <p>Estão ordenados por ordem de complexidade e/ou quantidade de props relacionadas. Essa ordem foi escolhida apenas por facilitar meu processo de desenvolvimento.</p>
    <p>Feedbacks são bem-vindos!</p>
    <p><a href='https://linkedin.com/in/willianwelbert' target='_blank' rel='noreferrer noopener'>LinkedIn</a> | <a href='mailto:willianwelbert@yahoo.com.br'>Email</a></p>
  </WelcomeContainer>;

toStorybook.story = {
  name: 'Front End Test',
};
