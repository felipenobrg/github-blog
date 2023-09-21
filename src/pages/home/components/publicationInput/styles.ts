import styled from "styled-components";

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

    
  }
`;
