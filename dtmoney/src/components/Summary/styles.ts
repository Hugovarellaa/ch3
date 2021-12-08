import styled from "styled-components";

export const Container = styled.div`
  margin-top: -6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      line-height: 2rem;
      margin-bottom: 1rem;

      img {
        width: 30px;
        height: 30px;
      }
    }
    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }
  }
`;
