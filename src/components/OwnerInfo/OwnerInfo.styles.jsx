import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: block;
  width: 100vw;
  top: 0;
  position: fixed;
`

export const InfoContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #eee;
  padding: 0.8rem;
  background-color: #fcfcfc;
  justify-content: space-around;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  color: #555;
`;

export const Info = styled.div`
  font-size: 1rem;
  text-align: center;
  width: 32%;
  display: inline-block;
`;

export const Caption = styled.span`
  font-size: 0.7rem;
  margin: 0;
  padding: 0.2rem 0;
  display: block;
`;

export const OwnerAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  max-width: 300px;
  border-radius: 50%;
  border: 3px solid #ff5a49;
  margin-bottom: -3rem;
  background-size: 110%;
  background-position: center;
`;

export const OwnerRepoCount = styled.span``;
