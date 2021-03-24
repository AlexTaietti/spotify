import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: 'http://api.sprintt.co/spotify',
   headers: { 'user-access-token': process.env.REACT_APP_SPOTIFY_TOKEN }
});

export const formatSlug = (s: string) => s.toLowerCase().replace(/\s/g, '-');

export const getResource: <T>(url: string) => Promise<T> = async (url) => {

   return axiosInstance.get(url)
      .then(response => response.data)
      .catch(error => {
         throw new Error(`Could not get the resource at ${url}\n\nError: ${error}`);
      });

};