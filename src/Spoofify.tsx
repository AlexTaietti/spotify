import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { PlaybackProvider } from './state/PlaybackContext';
import { NavBar, TrackContainer, MainContainer } from './components';

export const Spoofify: React.FC = () => {

  return (
    <Router>
      <AppWrapper>
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

`;