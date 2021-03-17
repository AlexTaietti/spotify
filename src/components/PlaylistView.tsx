import { useLocation } from 'react-router';
import { useSpotifyApi } from '../hooks/useSpotifyApi';

type PlaylistLocationState = { id: string; }

export const PlaylistView: React.FC = () => {

   const { state: locationState } = useLocation<PlaylistLocationState>();

   const playlistInfo = useSpotifyApi(`/playlist_tracks/${locationState.id}`);

   console.log(playlistInfo);

   return <h1>Helloooooo!</h1>;

};