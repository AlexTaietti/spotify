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
   const currentSongID = useRef<number>();

   const timeUpdateHandler = useCallback(() => {

      if (audioObject?.current?.currentTime && state?.song?.duration) {
         setSongProgressionBarWidth(((audioObject.current.currentTime * 1000) * 100) / state.song.duration);
      }

   }, [state]);

   const songEndHandler = useCallback(() => { //TODO: refactor me!

      if (state?.playlist?.tracks.length) {

         for (let i = 0; i < state.playlist.tracks.length; i++) {

            if (state.playlist.tracks[i].track_id === currentSongID.current) {

               if (state.playlist.tracks[i + 1]) {

                  const songContextData = {
                     artist: state.playlist?.tracks[i + 1].artists_names,
                     id: state.playlist.tracks[i + 1].track_id,
                     duration: state.playlist.tracks[i + 1].duration,
                     name: state.playlist.tracks[i + 1].name
                  };

                  dispatch({ type: 'SET_SONG', song: songContextData });

               } else {

                  const songContextData = {
                     artist: state.playlist?.tracks[0].artists_names,
                     id: state.playlist.tracks[0].track_id,
                     duration: state.playlist.tracks[0].duration,
                     name: state.playlist.tracks[0].name
                  };

                  dispatch({ type: 'SET_SONG', song: songContextData });

               }

               break;

            }

         }

      }

   }, [state, dispatch]);

   useEffect(() => {

      if (state?.song && currentSongID.current !== state.song.id) {

         const url = makeSongUrl(state.song.id);

         audioObject.current.src = url;
         audioObject.current.load();

         audioObject.current.addEventListener('timeupdate', timeUpdateHandler);

         audioObject.current.addEventListener('ended', songEndHandler);

         console.log(`Now playing: ${state.song.name}, from the playlist with id {${state?.playlist?.id}}.\n\nThe last song played had this id {${currentSongID.current}} and here's the current song's id {${state.song.id}}`);

         currentSongID.current = state.song.id;

         setSongProgress(0);

      }

      if (!state?.playing) {

         audioObject?.current?.pause();

      } else {

         const audioPromise = audioObject?.current?.play();

         if (audioPromise !== undefined) {

            audioPromise.then(() => {

               console.log('playing some sweet tunes!');

            }).catch(() => console.warn("playback prevented"));

         }

      }

      return () => {

         audioObject.current.removeEventListener('timeupdate', timeUpdateHandler);

         // eslint-disable-next-line
         audioObject.current.removeEventListener('ended', songEndHandler);

      };

   }, [state, songEndHandler, timeUpdateHandler]);

   useEffect(() => {

      if (audioObject.current && audioObject.current.volume) audioObject.current.volume = volume / 100;

   }, [volume]);

   useEffect(() => {

      // @ts-ignore
      if (audioObject.current && state?.song) audioObject.current.currentTime = `${((state.song.duration / 1000) * songProgress) / 100}`;

   }, [songProgress, state?.song]);

   return (
      <TrackWrapper>
         { state?.song && <AlbumData song={state?.song?.name} artist={state?.song?.artist} image={state?.playlist?.image} />}
         <TrackControls setSongProgress={setSongProgress} playing={state?.playing} time={songProgressionBarWidth} duration={state?.song?.duration} />
         <VolumeControls setVolume={setVolume} volume={volume} />
      </TrackWrapper>
   );

};