import { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { makeSongUrl } from '../helpers/utils';
import { usePlayback } from '../state/PlaybackContext';
import { AlbumData } from './TrackAlbumData';
import { TrackControls } from './TrackControls';
import { VolumeControls } from './VolumeControls';

export const TrackContainer: React.FC = () => {

   const { state, dispatch } = usePlayback();

   const [volume, setVolume] = useState(50);

   const [songProgress, setSongProgress] = useState<number | undefined>(0);

   const audioObject = useRef<HTMLAudioElement>(new Audio());

   //handler for the audio object (will be provided with a fresh scope whenever the global song object changes)
   const timeUpdateHandler = useCallback(() => {

      setSongProgress(state?.song?.duration && ((audioObject.current.currentTime * 1000) * 100) / state.song.duration);

   }, [state?.song]);

   //handler for the audio object (will be provided with a fresh scope whenever either the global song object or the global playlist object changes)
   const songEndHandler = useCallback(() => {

      if (state?.playlist?.tracks.length && state.playlist.tracks.length > 1) {

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

      } else { dispatch({ type: 'PAUSE' }); }

   }, [state?.playlist, state?.song, dispatch]);

   //effect for resetting the app's audio object and loading a new banger
   useEffect(() => {

      if (state?.song && state.song.track_id !== state.lastSong) {

         const playingMusic = !audioObject.current.paused || audioObject.current.ended; //check if we are blasting a gem already...

         const url = makeSongUrl(state.song.track_id);

         audioObject.current.src = url;
         audioObject.current.load();

         //using a standard useEffect clean up function would cause an undesired behaviour in this specific case
         if (typeof audioObject.current.ontimeupdate === 'function') audioObject.current.removeEventListener('timeupdate', timeUpdateHandler);
         audioObject.current.ontimeupdate = timeUpdateHandler;

         if (playingMusic) {

            const audioPromise = audioObject?.current?.play();

            if (audioPromise !== undefined) {

               audioPromise.then(() => {

                  console.log('playing some sweet tunes!');

               }).catch(() => console.warn("playback prevented"));

            }

         }


         console.log(`Now playing: ${state.song.name}.\n\nLast song's id was {${state?.lastSong}} and here's the current one {${state.song.track_id}}`);

         setSongProgress(0);

      }

   }, [state?.song, state?.lastSong, timeUpdateHandler]);

   //effect for toggling the audio object's playstate whenever a component changes the global state's "playing" flag
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


   //effect for resetting the handler fired by the audio object when a song is done playing
   useEffect(() => {

      const currentAudioObject = audioObject.current;

      currentAudioObject.addEventListener('ended', songEndHandler);

      return () => currentAudioObject.removeEventListener('ended', songEndHandler);

   }, [songEndHandler]);

   //effect for setting the audio object's volume
   useEffect(() => {

      if (audioObject.current && audioObject.current.volume) audioObject.current.volume = volume / 100;

   }, [volume]);

   const handleSelectPoint = useCallback((trackPercentage) => {

      console.log(audioObject.current.currentTime, trackPercentage);

      if (state?.song) {

         // @ts-ignore
         audioObject.current.currentTime = `${((state.song.duration / 1000) * trackPercentage) / 100}`;

         setSongProgress(((audioObject.current.currentTime * 1000) * 100) / state.song.duration);

      }

   }, [state?.song]);

   return (
      <TrackWrapper>
         { state?.song && state.playlist ? <AlbumData displayTracks={state?.displayTracks} song={state.song} playlist={state.playlist} /> : null}
         <TrackControls handleClick={handleSelectPoint} playing={state?.playing} time={songProgress} duration={state?.song?.duration} />
         <VolumeControls setVolume={setVolume} volume={volume} />
      </TrackWrapper>
   );

};

const TrackWrapper = styled.footer`

   grid-area: track;
   display: block;
   position: relative;
   box-shadow: 0 0 5px var(--track-container-shadow-color);
   background: var(--track-container-bg);
   
`;