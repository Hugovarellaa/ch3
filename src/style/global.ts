import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    --shape: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969cb3;
    --background: #F0F2F5;

  }

  html{
    @media(max-width: 720px) {
      font-size:97.75%
    }
    @media(max-height: 1080px) {
      font-size: 87.5%;
    }
  }
  
  body{
    background: var(--background);
    -webki-font-smoothing: antialiased;
  }

  body, input, select, textarea, button{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [display]{
    opacity: 0.6;
    cursor: not-allowed;
  }


  .react-modal-container{
    position: fixed;
    background: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content:center;
  }

  .react-modal-content{
      width: 100%;
      max-width:576px;
      background: var(--shape);
      border-radius: 0.25rem; 
      padding: 3rem;
      position: relative;
  }
  .closeImg{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s;

  &:hover{
    filter: brightness(0.5);
  }
  }
`;
