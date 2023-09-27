import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  width: 54rem;
  height: 13.25rem;

  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: -6rem;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    height: 27rem;
    max-width: 100%;
    align-items: flex-start;
  }
`

export const ProfileInfoContent = styled.div`
  margin: 2rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 120rem;
  }
`

export const ProfileInfoButtons = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   a {
    text-decoration: none;
    color: ${(props => props.theme["blue"])};
    text-transform: uppercase;
    font-weight: bold;
   }
`

export const ProfileInfoTitle = styled.div`
  margin-top: 1rem;
`
export const ProfileInfoAbout = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props => props.theme["base-span"])};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 6px;
  }
`;
