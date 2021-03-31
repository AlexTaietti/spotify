import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { PlaylistTracks, PlaylistMetaData } from './PlaylistTracks';

export const PlaylistView: React.FC = () => {

   const { state: locationState } = useLocation<PlaylistLocationState>();

   const { response: playlistInfo } = useSpotifyApi<PlaylistInfoObject>(`playlist_tracks/${locationState.id}`);

   const [headerData, setHeaderData] = useState<PlaylistMetaData>();
   const [tracks, setTracks] = useState<SongData[]>();

   useEffect(() => {

      if (locationState && playlistInfo) {

         const headerData = {
            id: locationState.id,
            image: locationState.image,
            name: locationState.name,
            description: locationState.description,
            duration: playlistInfo.playlist_duration,
            songsNumber: playlistInfo.tracks.length
         }

         setHeaderData(headerData);

         setTracks([...playlistInfo.tracks]);

      }

   }, [locationState, playlistInfo]);

   return (headerData && tracks) ? <PlaylistTracks headerData={headerData} tracks={tracks} /> : null;

};

export type SongData = {
   album_name: string;
   artists_names: string;
   duration: number;
   is_liked: boolean;
   name: string;
   release_date: string;
   track_id: number;
};

export type PlaylistInfoObject = {
   playlist_duration: string;
   playlist_tracks: number;
   tracks: Array<SongData>;
};

type PlaylistLocationState = {
   id: number;
   image: string;
   name: string;
   description: string;
};