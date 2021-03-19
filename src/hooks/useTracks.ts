import { useState, useEffect, useCallback } from 'react';
import { useSpotifyApi } from '../hooks/useSpotifyApi';
import { SongData, PlaylistInfoObject } from '../components/PlaylistView';

type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

type SongFilterableProp = KeysMatching<SongData, string>;

export function useTracks(playlistID: number) {

   const { response: playlistInfo, error } = useSpotifyApi<PlaylistInfoObject>(`playlist_tracks/${playlistID}`);
   const [displayedSongs, setDisplayedSongs] = useState<SongData[]>();
   const [filter, setFilter] = useState('');
   const [playlistError, setPlaylistError] = useState(false);

   useEffect(() => {

      if (playlistInfo && playlistInfo.tracks) {

         setDisplayedSongs([...playlistInfo.tracks]);

      } else { setPlaylistError(error); }

   }, [playlistInfo]);

   useEffect(() => {

      if (filter.length <= 2 && playlistInfo?.tracks.length !== displayedSongs?.length) {

         const songs = playlistInfo && [...playlistInfo?.tracks];

         setDisplayedSongs(songs);

      } else {

         const songs = playlistInfo?.tracks.filter((song) => {

            for (let prop in song) {

               if (typeof song[prop as SongFilterableProp] === 'string' && song[prop as SongFilterableProp].includes(filter)) return true;

            }

         });

         setDisplayedSongs(songs);

      }

   }, [filter]);

   return { playlistInfo, displayedSongs, setFilter, playlistError };

}