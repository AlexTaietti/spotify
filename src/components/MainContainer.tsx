import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { Browse } from './Browse';
import { LikedSongsView } from './LikedSongsView';
import { PlaylistView } from './PlaylistView';
import { GenreView } from './GenreView';

export const MainContainer: React.FC = () => {

   return (
      <Main>
         <Route exact path="/" component={Home} />
         <Route path="/browse" component={Browse} />
         <Route path="/liked-songs" component={LikedSongsView} />
         <Route path="/playlist/:playlistID" component={PlaylistView} />
         <Route path="/genre/:genreID" component={GenreView} />
      </Main >
   );

};

const Main = styled.main`

   grid-area: main;
   background: var(--main-bg);
   height: 100%;
   width: 100%;
   overflow-x: hidden;

   &::-webkit-scrollbar { width: 12px; }

   &::-webkit-scrollbar-track { background: var(--scrollbar-track-color); }

   &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb-color);
      border-radius: 20px;
   }

`;