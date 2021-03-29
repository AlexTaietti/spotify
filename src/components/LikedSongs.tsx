import { useSpotifyApi } from '../state/hooks/useSpotifyApi';

export const LikedSongs: React.FC = () => {

   const { response: playlistInfo } = useSpotifyApi<any>(`liked_tracks`);

   return <pre style={{ padding: '100px' }}>{JSON.stringify(playlistInfo, null, 3)}</pre>;

};