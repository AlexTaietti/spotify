import { useSpotifyApi } from './useSpotifyApi';

export const usePlaylistData = (playlistEndpoint: string) => {

   const { response: playlistData, error: playlistError } = useSpotifyApi(playlistEndpoint);

   const playlist = (!playlistError && playlistData?.playlists?.length) ? playlistData.playlists : undefined;

   return playlist;

};