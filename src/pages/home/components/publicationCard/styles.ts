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
  height: 19rem;
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
      margin-bottom: 1rem;
      font-size: 1.2rem;
      width: 68%;
    }
  }

  &:hover {
    border: 2.5px solid ${(props) => props.theme["base-border"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const PublicationInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-background"]};
  margin-top: 2rem;

  input {
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    width: 54rem;
    padding: 1.2rem;
    border-radius: 8px;
    margin-top: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      color: ${(props) => props.theme["blue"]};
      outline: 2px solid ${(props) => props.theme["blue"]};
    }
  }
`;
