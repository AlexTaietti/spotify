import { useState, useEffect } from 'react';
import { useSpotifyApi } from '../hooks/useSpotifyApi';
import { SongData, PlaylistInfoObject } from '../../components/PlaylistView';

type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

type SongFilterableProp = KeysMatching<SongData, string>;

export function useTracks(playlistID: number) {

   const { response: playlistInfo } = useSpotifyApi<PlaylistInfoObject>(`playlist_tracks/${playlistID}`);
   const [displayedSongs, setDisplayedSongs] = useState<SongData[]>();
   const [filter, setFilter] = useState('');

   useEffect(() => {

      if (playlistInfo && playlistInfo.tracks) setDisplayedSongs(playlistInfo.tracks);

   }, [playlistInfo]);

   useEffect(() => {

      if (filter.length <= 2) {

         setDisplayedSongs(playlistInfo?.tracks);

      } else {

         const songs = playlistInfo?.tracks.filter(song => {

            for (let prop in song) {

               if (typeof song[prop as keyof SongData] === 'string' && song[prop as SongFilterableProp].includes(filter)) return true;

            }

            return false;

         });

         setDisplayedSongs(songs);

      }

   }, [filter, playlistInfo?.tracks]);

   return { playlistInfo, displayedSongs, setFilter };

}