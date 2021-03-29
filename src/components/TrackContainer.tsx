import { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { makeSongUrl } from '../helpers/utils';
import { usePlayback } from '../state/PlaybackContext';
import { AlbumData } from './TrackAlbumData';
import { TrackControls } from './TrackControls';
import { VolumeControls } from './VolumeControls';

const TrackWrapper = styled.div`

   grid-area: track;
   display: block;
   position: relative;
   box-shadow: 0 0 5px #f1f1f1;
   
`;

export const TrackContainer: React.FC = () => {

   const { state, dispatch } = usePlayback();

   const [volume, setVolume] = useState(50);

   const [songProgress, setSongProgress] = useState(0);
   const [songProgressionBarWidth, setSongProgressionBarWidth] = useState<number>();

   const audioObject = useRef<HTMLAudioElement>(new Audio());

   const timeUpdateHandler = useCallback(() => {

      if (audioObject?.current?.currentTime && state?.song?.duration && state.song.track_id !== state?.lastSong) {
         setSongProgressionBarWidth(((audioObject.current.currentTime * 1000) * 100) / state.song.duration);
      }

   }, [state?.song, state?.lastSong]);

   const songEndHandler = useCallback(() => { //TODO: refactor me!

      if (state?.playlist?.tracks.length) {

         for (let i = 0; i < state.playlist.tracks.length; i++) {

            if (state.playlist.tracks[i].track_id === state.song?.track_id) {

               if (state.playlist.tracks[i + 1]) {

                  dispatch({ type: 'SET_SONG', song: state.playlist.tracks[i + 1] });

               } else {

                  dispatch({ type: 'SET_SONG', song: state.playlist.tracks[0] });

               }

               break;

            }

         }

      }

   }, [state?.playlist, state?.song, dispatch]);

   useEffect(() => {

      if (state?.song && state.song.track_id !== state.lastSong) {

         if (typeof audioObject.current.ontimeupdate == "function" && typeof audioObject.current.onended == "function") {

            audioObject.current.removeEventListener('timeupdate', timeUpdateHandler);

            // eslint-disable-next-line
            audioObject.current.removeEventListener('ended', songEndHandler);

         }

         const playingMusic = !audioObject.current.paused || audioObject.current.ended; //check if we are blasting a gem already...

         const url = makeSongUrl(state.song.track_id);

         audioObject.current.src = url;
         audioObject.current.load();

         if (playingMusic) {

            const audioPromise = audioObject?.current?.play();

            if (audioPromise !== undefined) {

               audioPromise.then(() => {

                  console.log('playing some sweet tunes!');

               }).catch(() => console.warn("playback prevented"));

            }

         }

         audioObject.current.ontimeupdate = timeUpdateHandler;
         audioObject.current.onended = songEndHandler;

         console.log(`Now playing: ${state.song.name}, from the playlist with id {${state?.playlist?.id}}.\n\nThe last song played had this id {${state?.lastSong}} and here's the current song's id {${state.song.track_id}}`);

         setSongProgress(0);

      }

   }, [state?.song, state?.lastSong, state?.playlist, songEndHandler, timeUpdateHandler]);

   useEffect(() => {

      if (state?.playing) {

         const audioPromise = audioObject?.current?.play();

         if (audioPromise !== undefined) {

            audioPromise.then(() => {

               console.log('playing some sweet tunes!');

            }).catch(() => console.warn("playback prevented"));

         }

      } else { audioObject?.current?.pause(); }

   }, [state?.playing]);

   useEffect(() => {

      if (audioObject.current && audioObject.current.volume) audioObject.current.volume = volume / 100;

   }, [volume]);

   useEffect(() => {

      if (state?.song) {

         // @ts-ignore
         audioObject.current.currentTime = `${((state.song.duration / 1000) * songProgress) / 100}`;

         setSongProgressionBarWidth(((audioObject.current.currentTime * 1000) * 100) / state.song.duration);

      }

   }, [songProgress]);

   return (
      <TrackWrapper>
         { state?.song && state.playlist ? <AlbumData displayTracks={state?.displayTracks} song={state.song} playlist={state.playlist} /> : null}
         <TrackControls setSongProgress={setSongProgress} playing={state?.playing} time={songProgressionBarWidth} duration={state?.song?.duration} />
         <VolumeControls setVolume={setVolume} volume={volume} />
      </TrackWrapper>
   );

};