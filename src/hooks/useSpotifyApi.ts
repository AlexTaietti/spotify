import { useState, useEffect } from 'react';
import { PlayListData } from '../components/PlaylistCard';
import { axiosInstance } from '../helpers/utils';

type playListResponse = {
   playlists: Array<PlayListData>
}

type apiResponse = playListResponse | undefined;

export const useSpotifyApi = (endpoint: string) => {

   const [response, setResponse] = useState<apiResponse>();
   const [error, setError] = useState(false);

   useEffect(() => {

      axiosInstance.get(endpoint)
         .then(response => setResponse(response.data))
         .catch(error => {
            setResponse(undefined);
            setError(error);
         });

   }, [endpoint]);

   return {
      response,
      error
   }

};