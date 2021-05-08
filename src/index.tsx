import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { MobileRedirect } from './components';

import './style/global-font.css'; //keep @font-face in a separate file to avoid flickering in chrome (https://github.com/styled-components/styled-components/issues/2205)

const GlobalStyle = createGlobalStyle`

  :root{
    --main-text: #191414;
    --secondary-text: #6d6d6d;
    --track-container-bg: #fff;
    --nav-container-bg: #fff;
    --theme-toggle-bg: #6d6d6daa;
    --active-song-row-bg: #49d179;
    --main-bg: #f2f7f1;
    --selected-track-control: #c4c4c4;
    --idle-track-control: #191414;
    --disabled-carousel-control: #bbb;
    --active-carousel-control: #191414;
    --overlay-color: rgba(0, 0, 0, 0.3);
    --overlay-text-color: #fff;
    --scrollbar-track-color: #fafafa;
    --scrollbar-thumb-color: #c1c1c1;
    --active-nav-link-bg: #ddf5e5;
    --songs-table-frame-color: #646464;
    --track-container-shadow-color: #f1f1f1;
    --value-bar-track-color: #C4C4C4;
    --value-bar-color: #191414;
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
    <MobileRedirect />
  </React.StrictMode>,
  document.getElementById('root')
);
