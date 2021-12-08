import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 8rem;

  button {
    background: var(--blue-light);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    font-size: 1rem;
    line-height: 2rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
