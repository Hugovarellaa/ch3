import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 3rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 3.5rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 400;
    }
  }

  button[type="submit"] {
    width: 100%;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    height: 3.5rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "red" | "green";
}

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transparent"};

  transition: filter 0.2s;

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    width: 30px;
    height: 30px;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    color: var(--text-title);
    margin-left: 0.7rem;
  }
`;
