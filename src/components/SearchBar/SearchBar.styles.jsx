import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  background-color: #f2f2f2;
  width: 80%;
  min-height: 1rem;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Magnifier = styled.div`
  display: inline-block;
  width: 5%;
  padding: 0 0.5rem;
  border-right: 1px solid #bbb;
  & svg {
    fill: #bbb;
  }
`

export const SearchForm = styled.form`
  width: 80%;
  margin: 0 auto;
  width: 70%;
  min-height: 1.5rem;
`

export const SearchInputField = styled.input`
  font-family: monospace;
  font-size: 1rem;
  letter-spacing: 1px;
  border: none;
  width: 100%;
  min-height: 1.4rem;
`

export const OrderingIconsContainer = styled.div`
  width: 15%;
  max-width: 100px;
  display: flex;
  justify-content: space-around;

  & svg{
    fill: #999;
  }
`

