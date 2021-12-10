import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-top: -4.5rem;
  color: var(--text-title);

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    img {
      width: 25px;
      height: 25px;
    }

    strong {
      display: block;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }
  }
`;
