import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${(props => props.theme.blue)};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background:  ${(props => props.theme["base-post"])};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;