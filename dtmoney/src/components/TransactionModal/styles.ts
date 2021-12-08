import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    height: 3rem;
    padding: 2rem 1.5rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    background: var(--green);
    width: 100%;
    height: 3rem;
    margin-top: 1.5rem;
    padding: 2rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 2rem;
    color: #fff;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Content = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transparent"};

  img {
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 400;
    margin-left: 1rem;
  }

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }
`;
