import { useState, useEffect } from 'react';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { PlaylistTracks, PlaylistMetaData } from './PlaylistTracks';
import { SongData } from './PlaylistView';
import likedHeader from '../assets/images/liked_header.png';

export const LikedSongsView: React.FC = () => {

   const { response: likedTracks } = useSpotifyApi<{ liked_tracks: SongData[] }>(`liked_tracks`);

   const [headerData, setHeaderData] = useState<PlaylistMetaData>();
   const [tracks, setTracks] = useState<SongData[]>();

   useEffect(() => {

      if (likedTracks?.liked_tracks) {

         console.log(likedTracks);

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

   return (headerData && tracks?.length) ? <PlaylistTracks headerData={headerData} tracks={tracks} /> : null;

};