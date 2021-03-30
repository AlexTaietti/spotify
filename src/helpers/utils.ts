import axios from "axios";
import { SongData } from "../components/PlaylistView";

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

export const notifySongApi = (playlistID: number, songID: number) => {

   const url = `notify_played/${playlistID}/${songID}`;

   const request = axiosInstance.post(url);

   request.catch(error => console.error(error));

};

export const likeSongApi = (songObject: SongData) => {

   const url = `liked_tracks/${songObject.track_id}?status=${songObject.is_liked}`;

   const request = axiosInstance.post(url);

   request.catch(error => console.error(error));

};

const getEncryptedToken = (token: string) => {

   let date = new Date();

   let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`

   let stringToEncrypt = `${token}===${utcTime}`

   return btoa(stringToEncrypt)

};

export const makeSongUrl = (id: number) => {

   if (!process.env.REACT_APP_SPOTIFY_TOKEN) throw new Error("api token not found :(");

   const token = getEncryptedToken(process.env.REACT_APP_SPOTIFY_TOKEN);

   const url = `http://api.sprintt.co/spotify/play/${id}?access=${token}`;

   return url;

};

export const formatTime = (time: number | undefined) => {

   if (!time) return '--:--';

   const minutes = Math.floor((time / 1000) / 60);

   const leftOverSeconds = Math.floor((time / 1000) % 60);

   const seconds = leftOverSeconds < 10 ? '0' + leftOverSeconds : leftOverSeconds;

   return `${minutes}:${seconds}`;

};