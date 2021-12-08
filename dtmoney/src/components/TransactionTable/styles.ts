import styled from "styled-components";

export const Container = styled.form`
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font: 1rem;
      font-weight: 400;
      line-height: 2rem;
      text-align: left;
      margin-bottom: 1.5rem;
      padding: 1.5rem 2rem;
    }

    td {
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-body);
      font-size: 1rem;
      line-height: 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
