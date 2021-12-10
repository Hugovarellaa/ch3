import styled from "styled-components";

export const Container = styled.form`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: var(--text-body);

    th {
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
      text-align: left;
    }
    td {
      background: var(--shape);
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      line-height: 1.5rem;

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
