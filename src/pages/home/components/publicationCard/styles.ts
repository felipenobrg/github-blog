import styled from "styled-components";

export const CenteredPublicationCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PublicationCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const PublicationCardContent = styled.div`
  background: ${(props) => props.theme["base-post"]};
  width: 25.9rem;
  height: 17rem;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s ease;

  .name-time {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-size: 20px;
      margin-bottom: 1rem;
      width: 68%;
    }
  }

  &:hover {
    border: 3px solid ${(props) => props.theme["base-border"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;
