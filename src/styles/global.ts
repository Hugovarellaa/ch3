import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --background: #E2E8F0;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    --shape: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969CB3

  }

  html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, textarea, button{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
