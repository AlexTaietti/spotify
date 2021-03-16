import React from 'react';
import styled from 'styled-components';
import { Carousel } from './Carousel';
import { usePlaylistData } from '../hooks/usePlaylistData';

const HomeWrapper = styled.div`

   position: relative;
   width: 100%;
   min-height: 100%;
   background: #f2f7f1;
   padding: 100px 115px;

`;

export const Home: React.FC = () => {

   //get playlists from respective api endpoints (this works but doesn't feel correct, any suggestions welcome pls)
   const recentlyPlayed = usePlaylistData('recently_played_playlists?limit=10');
   const featured = usePlaylistData('featured_playlists?limit=10');
   const mood = usePlaylistData('mood_playlists?limit=10');

   return (
      <HomeWrapper>
         { recentlyPlayed && <Carousel title="Recently played" data={recentlyPlayed} />}
         { featured && <Carousel title="Featured playlists" data={featured} />}
         { mood && <Carousel title="Mood" data={mood} />}
      </HomeWrapper>
   )

};