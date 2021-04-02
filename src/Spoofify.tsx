import styled from 'styled-components';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PlaybackProvider } from './state/PlaybackContext';
import { NavBar, TrackContainer, MainContainer, ThemeToggleButton } from './components';

export const Spoofify: React.FC = () => {

  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <AppWrapper className={theme}>
        <ThemeToggleButton currentTheme={theme} setTheme={setTheme} />
        <PlaybackProvider>
          <NavBar />
          <MainContainer />
          <TrackContainer />
        </PlaybackProvider>
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`

  display: grid;
  grid-template-areas: "nav-bar main"
                       "track track";
  grid-template-columns: 270px auto;
  grid-template-rows: auto 100px;
  position: relative;
  height: 100%;
  min-width: 1280px;
  font-family: Rubik, sans-serif;

  &.dark{
    --main-text: #fff;
    --secondary-text: #6d6d6d;
    --track-container-bg: #000;
    --theme-toggle-bg: #fafafaaa;
    --nav-container-bg: #000;
    --main-bg: #131313;
    --active-nav-link-bg: #28b056;
    --track-container-shadow-color: #222821;
    --selected-track-control: #191414;
    --idle-track-control: #c4c4c4;
    --active-song-row-bg: #0e4521;
    --disabled-carousel-control: #555;
    --active-carousel-control: #fff;
    --overlay-color: rgba(0, 0, 0, 0.3);
    --overlay-text-color: #fff;
    --scrollbar-track-color: #fafafa;
    --scrollbar-thumb-color: #c1c1c1;
    --songs-table-frame-color: #646464;
    --value-bar-track-color: #596056;
    --value-bar-color: #fff;
  }

`;