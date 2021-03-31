import { useSpotifyApi } from './useSpotifyApi';
import { PlayListData } from '../../@types';

export function usePlaylistData(playlistEndpoint: string) {

   const { response: playlistData, error: playlistError } = useSpotifyApi<{ playlists: Array<PlayListData> }>(playlistEndpoint);

   const playlist = (!playlistError && playlistData?.playlists?.length) ? playlistData.playlists : undefined;

   return playlist;

};