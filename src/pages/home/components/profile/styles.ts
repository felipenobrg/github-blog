import styled from "styled-components";

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme["base-profile"]};
  width: 54rem;
  height: 13.25rem;

  display: flex;
  margin: 0 auto;
  margin-top: -6rem;
  border-radius: 8px;
`;

export const ProfileContent = styled.div`
  margin: 2rem 0 0 2rem;
  display: flex;
`;

export const ImageContainer = styled.div`
  img {
    width: 9.25rem;
    border-radius: 8px;
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
`;

export const ProfileAbout = styled.div`
  display: flex;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 2px;
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
  }
`