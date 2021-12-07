import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    color: var(--text-body);
    font-size: 1rem;
    border: 1px solid #d7d7d7;

    & + input {
      margin-top: 1rem;
    }
    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="button"] {
    margin-top: 1.5rem;
    width: 100%;
    background: var(--green);
    height: 4rem;
    border: 0;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
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
  background: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transparent"};
  border: 1px solid #969cb2;
  border-radius: 0.25rem;
  padding: 1rem 0;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.3, "#969CB2")};
  }

  img {
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 1rem;
    margin-left: 1rem;
  }
`;
