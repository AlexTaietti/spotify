import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { PlaylistHeader } from './PlaylistHeader';
import { Filter } from './Filter';
import { Songs } from './Songs';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { usePlayback } from '../state/PlaybackContext';
import { notifySongApi } from '../helpers/utils';

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

type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

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

type SongFilterableProp = KeysMatching<SongData, string>;

export const PlaylistView: React.FC = () => {

   const { state: locationState } = useLocation<PlaylistLocationState>();

   const { response: playlistInfo } = useSpotifyApi<PlaylistInfoObject>(`playlist_tracks/${locationState.id}`);

   const { state, dispatch } = usePlayback();

   const [filter, setFilter] = useState('');

   //update the global state with the new displayed playlist
   useEffect(() => {

      if (playlistInfo) {

         if (filter.length <= 2) {

            dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: [...playlistInfo.tracks] });

         } else {

            const songs = playlistInfo.tracks.filter(song => {

               for (let prop in song) {

                  if (typeof song[prop as keyof SongData] === 'string' && song[prop as SongFilterableProp].includes(filter)) return true;

               }

               return false;

            });

            dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: songs });

         }

      }

   }, [filter, playlistInfo, dispatch]);

   // make sure we don't flash the old playlist when we load the view next time
   useEffect(() => {

      return () => dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: undefined });

   }, [dispatch]);

   //update the global song and playlist objects
   const updateSong = async (song: SongData) => {

      if ((playlistInfo && playlistInfo.tracks) && state?.song?.track_id !== song.track_id) {

         const playlistContextData = {
            id: locationState.id,
            image: locationState.image,
            tracks: [...playlistInfo.tracks]
         };

         dispatch({ type: 'SET_PLAYLIST', playlist: playlistContextData });
         dispatch({ type: 'SET_SONG', song: song });

         notifySongApi(playlistContextData.id, song.track_id);

         if (!state?.playing) dispatch({ type: 'PLAY' });

      }

   };

   return (


      (playlistInfo && state?.displayTracks) ?

         <PlaylistViewWrapper>
            <PlaylistHeader imageUrl={locationState.image} name={locationState.name} description={locationState.description} songNumber={playlistInfo.tracks.length} duration={playlistInfo.playlist_duration} />
            <SongsSection>
               <Filter setFilter={setFilter} />
               <Songs updateSong={updateSong} songs={state.displayTracks} />
            </SongsSection>
         </PlaylistViewWrapper> : null

   );

};