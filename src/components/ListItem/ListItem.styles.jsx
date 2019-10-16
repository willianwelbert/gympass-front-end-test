import styled from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0.5rem auto;
  background-color: #fcfcfc;
  border-bottom: 2px solid #eee;
  padding: 0.5rem;
  font-family: 'Open Sans', sans-serif;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0.5rem;
`

export const ListItemTitle = styled.h4`
  display: block;
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: 1.3rem;
  color: #FF5A49;
  font-weight: 700;
  padding: 0.5rem;
`

export const ListItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  margin: 0;
  padding: 0.5rem;
`

export const ExtraInfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  padding: 0.5rem 0.7rem;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;

  & .star{
    fill: #aaa;
  };
`

export const IconInfo = styled.span`
  font-size: 0.8rem;
  padding-right: 0.5rem;
  text-align: center;
`

export const ProgrammingLanguage = styled.span`
  display: block;
  font-family: monospace;
  background-color: #eee;
  padding: 0.3rem;
`