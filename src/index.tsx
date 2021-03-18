import React from 'react';
import ReactDOM from 'react-dom';
import Spoofify from './Spoofify';
import { createGlobalStyle } from 'styled-components';

import Rubik from './assets/fonts/Rubik-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Rubik';
    src: local('Rubik'), url(${Rubik}) format('truetype');
    font-style: normal;
    font-weight: 100 900;
  }

  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  a{ text-decoration: none; }

  html{ font-size: 10px; }

  body, html{
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  ul, ol{
    list-style-type: none;
  }

  #root{
    height: 100%;
    max-height: 100%;
    position: relative;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Spoofify />
  </React.StrictMode>,
  document.getElementById('root')
);
