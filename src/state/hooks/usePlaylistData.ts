import { useSpotifyApi } from './useSpotifyApi';
import { PlayListData } from '../../components/PlaylistCard';

type playlistHomeData = {
   playlists: Array<PlayListData>
}

export function usePlaylistData(playlistEndpoint: string) {

   const { response: playlistData, error: playlistError } = useSpotifyApi<playlistHomeData>(playlistEndpoint);

   const playlist = (!playlistError && playlistData?.playlists?.length) ? playlistData.playlists : undefined;

   return playlist;

};