import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue-light);
    border: 0;
    color: #ffffff;
    padding: 0 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
