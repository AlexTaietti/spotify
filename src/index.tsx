import React from 'react';
import ReactDOM from 'react-dom';
import { Spoofify } from './Spoofify';
import { createGlobalStyle } from 'styled-components';

import './style/global-font.css'; //keep @font-face in a separate file to avoid flickering in chrome (https://github.com/styled-components/styled-components/issues/2205)

const GlobalStyle = createGlobalStyle`

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

  ul, ol{ list-style-type: none; }

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
