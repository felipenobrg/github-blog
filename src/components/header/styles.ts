import styled from 'styled-components'
import headerCover from '../../assets/header-cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  img {
    max-width: 9.25rem;
  }
`