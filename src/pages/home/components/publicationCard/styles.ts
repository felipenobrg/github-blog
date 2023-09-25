import styled, { keyframes } from "styled-components";

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
  height: 16rem;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid transparent;
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
    border: 3px solid ${(props) => props.theme["base-border"]};
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
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      color: ${(props) => props.theme["blue"]};
      outline: 2px solid ${(props) => props.theme["blue"]};
    }
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${(props) => props.theme.blue};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;
