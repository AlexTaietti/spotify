import { useState, useEffect } from 'react';
import { axiosInstance } from '../../helpers/utils';

type ApiResponse<T> = {
   response: T | undefined;
   error: boolean;
}

export function useSpotifyApi<DataType>(endpoint: string): ApiResponse<DataType> {

   const [response, setResponse] = useState<DataType>();
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