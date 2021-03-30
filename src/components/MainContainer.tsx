import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './Home';
import { Browse } from './Browse';
import { LikedSongsView } from './LikedSongsView';
import { PlaylistView } from './PlaylistView';

const Main = styled.div`

   grid-area: main;
   background: #f2f7f1;
   height: 100%;
   width: 100%;
   overflow-x: hidden;

   &::-webkit-scrollbar { width: 12px; }

   &::-webkit-scrollbar-track { background: #fafafa; }

   &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 20px;
   }

`;

export const MainContainer: React.FC = () => {

   return (
      <Main>
         <Route exact path="/" component={Home} />
         <Route path="/browse" component={Browse} />
         <Route path="/liked-songs" component={LikedSongsView} />
         <Route path="/playlist/:playlistName" component={PlaylistView} />
      </Main >
   );

};