import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Browse, LikedSongs } from '.';

const Main = styled.div`

   grid-area: main;
   min-height: 100%;
   height: 100%;
   width: 100%;
   position: relative;
   display: block;
   background: #f2f7f1;
   padding: 70px;
   font-size: 16px;
   font-family: sans-serif;
   font-weight: lighter;
   overflow: scroll;

`;

export const MainContainer: React.FC = () => {

   return (
      <Main>
         <Route exact path="/" component={Home} />
         <Route path="/browse" component={Browse} />
         <Route path="/liked-songs" component={LikedSongs} />
      </Main >
   );

};