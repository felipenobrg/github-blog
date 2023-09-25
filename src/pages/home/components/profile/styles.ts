import styled from "styled-components";

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme["base-profile"]};
  width: 54rem;
  height: 13.25rem;

  display: flex;
  margin: 0 auto;
  margin-top: -6rem;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    height: 25rem;
  }
`;

export const ProfileContent = styled.div`
  margin: 2rem 0 0 2rem;
  display: flex;

  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 120rem;
  }
 
`;

export const ImageContainer = styled.div`
  img {
    width: 9.25rem;
    border-radius: 9999px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 0 1rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;

    h1 {
      margin-top: 1rem;
    }
  
    p {
      width: 80%;
    }
  }
`;

export const ProfileAbout = styled.div`
  display: flex;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  
  @media screen and (max-width: 768px) {
   width: 60%;
  }
  
`

export const UrlContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 2px;
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    margin-top: 1.2rem;
    margin-left: 7rem;
    font-weight: bold;
  }
`