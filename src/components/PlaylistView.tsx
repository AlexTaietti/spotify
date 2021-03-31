import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { PlaylistTracks } from './PlaylistTracks';
import { PlaylistLocationState, PlaylistInfoObject, SongData, PlaylistMetaData } from '../@types';

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