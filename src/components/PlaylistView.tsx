import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { PlaylistHeader } from './PlaylistHeader';
import { Filter } from './Filter';
import { Songs } from './Songs';
import { useTracks } from '../state/hooks/useTracks';
import { usePlayback } from '../state/PlaybackContext';

type PlaylistLocationState = {
   id: number;
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

export type PlaylistInfoObject = {
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
   padding: 0 50px 35px 150px;
   display: block;
   min-height: 100%;
   min-width: 100%;
   z-index: 0;

`;

export const PlaylistView: React.FC = () => {

   const { state: locationState } = useLocation<PlaylistLocationState>();

   const { playlistInfo, displayedSongs, setFilter } = useTracks(locationState.id);

   const { state, dispatch } = usePlayback();

   const updateSong = async (song: SongData) => {

      if ((playlistInfo && playlistInfo.tracks) && state?.song !== song) {

         const playlistContextData = {
            id: locationState.id,
            tracks: playlistInfo.tracks,
            image: locationState.image
         };

         dispatch({ type: 'SET_PLAYLIST', playlist: playlistContextData });
         dispatch({ type: 'SET_SONG', song: song });

         if (!state?.audio) dispatch({ type: 'PLAY' });

      }

   };

   return (

      <PlaylistViewWrapper>

         {

            (playlistInfo && displayedSongs) && //use a fragment just so I can conditionally render even in case of failed fetch attempt

            <>
               <PlaylistHeader imageUrl={locationState.image} name={locationState.name} description={locationState.description} songNumber={playlistInfo.tracks.length} duration={playlistInfo.playlist_duration} />
               <SongsSection>
                  <Filter setFilter={setFilter} />
                  <Songs updateSong={updateSong} songs={displayedSongs} />
               </SongsSection>
            </>

         }

      </PlaylistViewWrapper>

   );

};