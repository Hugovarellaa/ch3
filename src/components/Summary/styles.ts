import styled from "styled-components";

export const Container = styled.div`
  max-width: 1160px;
  width: 100%;
  margin-top: -10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 30px;
        height: 30px;
      }
    }
    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 4rem;
      margin-top: 1rem;
    }

    &:last-child {
      background: var(--green);
      color: #ffffff;
    }
  }
`;
