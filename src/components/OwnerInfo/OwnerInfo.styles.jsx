import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #fcfcfc;
  border-bottom: 2px solid #eee;
  justify-content: space-around;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  color: #555;
`

export const Info = styled.span`
  font-size: 1rem;
  text-align: center;
`;

export const Caption = styled.span`
  font-size: 0.7rem;
  letter-spacing: 1px;
  margin: 0;
  padding: 0.2rem 0;
  display: block;
`

export const OwnerAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  max-width: 300px;
  border-radius: 50%;
  border: 3px solid #FF5A49;
  margin-bottom: -1rem;
  background-size: 110%;
  background-position: center;
`

export const OwnerRepoCount = styled.span``