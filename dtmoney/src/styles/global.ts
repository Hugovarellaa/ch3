import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
  --text-body: #969CB3;
  --background: #F0F2F5;
}

html{
  @media(max-width: 1080px){
    font-size: 93.75%;
  }
  @media(max-width: 760px){
    font-size: 87.5%;
  }
}

body{
  background: var(--background);
}

body, input, textarea, select, button {
  font-family: "Poppins", sans-serif;
  font-size: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disable]{
  opacity: 0.6;
  cursor: not-allowed;
}

a{
  color: inherit;
  text-decoration: none;
}

.react-modal-overlay{
  position: fixed;
  background: rgba(0,0,0,0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content{
  padding: 3rem;
  background: var(--background);
  width: 100%;
  max-width: 576px;
  position: relative;
  border-radius: 0.25rem;

}
.closeImg{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background: transparent;
  border: 0;
  transition: filter 0.2s;
  
  &:hover{
    filter: brightness(0.4);
  }
}

`;
