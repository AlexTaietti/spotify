import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlaylistHeader } from './PlaylistHeader';
import { Filter } from './Filter';
import { Songs } from './Songs';
import { usePlayback } from '../state/PlaybackContext';
import { notifySongApi } from '../helpers/utils';
import { SongData } from './PlaylistView';
import { EmptyPlaylist } from './EmptyPlaylist';

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

export type PlaylistMetaData = {
   id: number;
   image: string;
   name: string;
   description?: string;
   duration?: string;
   songsNumber: number;
};

type PlaylistTracksProps = {
   onEmpty?: string;
   headerData: PlaylistMetaData;
   tracks: SongData[];
}

type SongFilterableProp = KeysMatching<SongData, string>;

export const PlaylistTracks: React.FC<PlaylistTracksProps> = ({ headerData, tracks, onEmpty }) => {

   const { state, dispatch } = usePlayback();

   const [filter, setFilter] = useState('');

   //update the global state with the new displayed playlist
   useEffect(() => {

      if (tracks) {

         if (filter.length <= 2) {

            dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: [...tracks] });

         } else {

            const songs = tracks.filter(song => {

               for (let prop in song) {

                  if (typeof song[prop as keyof SongData] === 'string' && song[prop as SongFilterableProp].includes(filter)) return true;

               }

               return false;

            });

            dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: songs });

         }

      }

   }, [filter, tracks, dispatch]);

   // make sure we don't flash the old playlist when we load the view next time
   useEffect(() => {

      return () => dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: undefined });

   }, [dispatch]);

   //update the global song and playlist objects
   const updateSong = async (song: SongData) => {

      if (state?.song?.track_id !== song.track_id) {

         const playlistContextData = {
            id: headerData.id,
            image: headerData.image,
            tracks: [...tracks]
         };

         dispatch({ type: 'SET_PLAYLIST', playlist: playlistContextData });
         dispatch({ type: 'SET_SONG', song: song });

         notifySongApi(playlistContextData.id, song.track_id);

         if (!state?.playing) dispatch({ type: 'PLAY' });

      }

   };

   return (


      (headerData && state?.displayTracks && state?.displayTracks.length) ?

         <PlaylistViewWrapper>
            <PlaylistHeader imageUrl={headerData.image} name={headerData.name} description={headerData.description} songNumber={headerData.songsNumber} duration={headerData.duration} />
            <SongsSection>
               <Filter setFilter={setFilter} />
               <Songs updateSong={updateSong} songs={state.displayTracks} />
            </SongsSection>
         </PlaylistViewWrapper> : ((state?.displayTracks?.length === 0) ? <EmptyPlaylist message={onEmpty} /> : null)

   );

};