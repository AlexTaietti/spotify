import { useState, useEffect } from 'react';
import likedHeader from '../assets/images/liked_header.png';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { SongData, PlaylistMetaData } from '../@types';
import { PlaylistTracks } from './PlaylistTracks';

export const LikedSongsView: React.FC = () => {

   const { response: likedTracks } = useSpotifyApi<{ liked_tracks: Array<SongData> }>(`liked_tracks`);

   const [headerData, setHeaderData] = useState<PlaylistMetaData>();
   const [tracks, setTracks] = useState<Array<SongData>>();

   useEffect(() => {

      if (likedTracks?.liked_tracks) {

         const headerData = {
            image: likedHeader,
            id: -1,
            name: "Liked Songs",
            songsNumber: likedTracks.liked_tracks.length
         }

         setHeaderData(headerData);

         setTracks([...likedTracks.liked_tracks]);

      }

   }, [likedTracks]);

   return (headerData && tracks) ? <PlaylistTracks onEmpty={'💔'} headerData={headerData} tracks={tracks} /> : null;

};