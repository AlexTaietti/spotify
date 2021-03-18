import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: 'http://api.sprintt.co/spotify',
   headers: { 'user-access-token': process.env.REACT_APP_SPOTIFY_TOKEN }
});

export const formatSlug = (s: string) => s.toLowerCase().replace(/\s/g, '-');