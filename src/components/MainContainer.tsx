import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`

   grid-area: main;
   width: 100%;
   height: 100%;
   position: relative;
   display: flex;
   background: #f2f7f1;
   padding: 50px;
   font-size: 16px;
   font-family: sans-serif;
   font-weight: lighter;

`;

export const MainContainer: React.FC = () => {

   return (
      <Main>
         <Switch>
            <Route exact path="/">
               <h4>Home</h4>
            </Route>
            <Route path="/browse">
               <h4>Browse</h4>
            </Route>
            <Route path="/liked-songs">
               <h4>Songs</h4>
            </Route>
         </Switch>
      </Main>
   );

};