import { createGlobalStyle } from "styled-components";

export const theme = {
  body: "#010101",
  text: "#FFFFFF",
  primary: "#43E6FC",
};

export const GlobalStyles = createGlobalStyle`
  * {
    
    
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
  }

  h1{
    font-family: 'Mitr',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 120%;
  }

  h2{
    font-family: 'Prompt',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 36px;
  }

  h3{
    font-family: 'Prompt',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 68px;
  }

  h4{
    font-family: 'Prompt',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 133%;
  }
  h5{
    font-family: 'Prompt',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  h6{
    font-family: 'Prompt',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
  `;
