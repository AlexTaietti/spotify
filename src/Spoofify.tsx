import React from 'react';
import styled from 'styled-components';
import { NavBar, TrackContainer, MainContainer } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

const AppWrapper = styled.div`

  display: grid;
  grid-template-areas:
  "nav-bar main"
  "track track";
  grid-template-columns: 250px auto;
  grid-template-rows: auto 100px;
  position: relative;
  height: 100%;
  font-family: sans-serif;

`;

export const Spoofify: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <NavBar />
        <MainContainer />
        <TrackContainer />
      </AppWrapper>
    </Router>
  );
}

export default Spoofify;