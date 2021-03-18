import React from 'react';
import { useLocation } from 'react-router';
import { useSpotifyApi } from '../hooks/useSpotifyApi';
import styled from 'styled-components';
import { PlaylistHeader } from './PlaylistHeader';
import { Filter } from './Filter';
import { Songs } from './Songs';

type PlaylistLocationState = {
   id: string;
   image: string;
   name: string;
   description: string;
}

export type SongData = {
   album_name: string;
   artists_names: string;
   duration: number;
   is_liked: boolean;
   name: string;
   release_date: string;
   track_id: number;
}

type PlaylistInfoObject = {
   playlist_duration: string;
   playlist_tracks: number;
   tracks: Array<SongData>;
}

const PlaylistViewWrapper = styled.div`

   position: relative;
   display: block;
   min-height: 100%;
   min-width: 100%;

`;

const SongsSection = styled.section`

   position: relative;
   padding: 0 115px;
   display: block;
   min-height: 100%;
   min-width: 100%;
   z-index: 0;

`;

export const PlaylistView: React.FC = () => {

   const { state: locationState } = useLocation<PlaylistLocationState>();

   const { response: playlistInfo } = useSpotifyApi<PlaylistInfoObject>(`playlist_tracks/${locationState.id}`);

   return (
      <PlaylistViewWrapper>
         { playlistInfo && //use a fragment just so I can conditionally render even in case of failed fetch attempt

            <>
               <PlaylistHeader imageUrl={locationState.image} name={locationState.name} description={locationState.description} songNumber={playlistInfo.tracks.length} duration={playlistInfo.playlist_duration} />
               <SongsSection>
                  <Filter />
                  <Songs songs={playlistInfo.tracks} />
               </SongsSection>
            </>

         }
      </PlaylistViewWrapper>
   );

};