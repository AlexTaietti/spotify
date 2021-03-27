import React, { useCallback } from "react";
import styled from 'styled-components';
import { BackIcon } from './BackIcon';
import { NextIcon } from './NextIcon';
import { PauseIcon } from "./PauseIcon";
import { PlayIcon } from './PlayIcon';
import { VariableBar } from './VariableBar';
import { formatTime } from '../helpers/utils';
import { usePlayback } from "../state/PlaybackContext";

const ControlsContainer = styled.div`

   display: flex;
   flex-direction: column;
   margin: 0 auto;
   width: 60%;
   height: 100%;
   align-items: center;
   padding: 30px 0 15px;

`;

const Controls = styled.div`

   display: flex;
   align-items: center;
   height: 22px;
   margin-bottom: 10px;
   
   i{

      height: 100%;
      cursor: pointer;

      svg{ height: 100%; }

   }

   path{
      transition-property: stroke, fill;
      transition-duration: .3s;
   }

`;

const Progress = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;

   span{

      display: inline-block;
      color: #191414;
      font-size: 1.8rem;
      font-weight: 400;

      &:first-of-type{ margin-right: 12px; }

      &:last-of-type{ margin-left: 12px; }

   }

`;

type TrackControlsProps = {

   time?: number;

   duration?: number;

   setSongProgress: React.Dispatch<React.SetStateAction<number>>;

   playing?: boolean;

};

export const TrackControls: React.FC<TrackControlsProps> = ({ setSongProgress, time, duration, playing }) => {

   const { state, dispatch } = usePlayback();

   const playNextSong = useCallback(() => { //TODO: refactor me!

      console.log('playing next...');

      if (state?.playlist?.tracks.length) {

         for (let i = 0; i < state.playlist.tracks.length; i++) {

            if (state.playlist.tracks[i].track_id === state.song?.id) {

               if (state.playlist.tracks[i + 1]) {

                  const songContextData = {
                     artist: state.playlist?.tracks[i + 1].artists_names,
                     id: state.playlist.tracks[i + 1].track_id,
                     duration: state.playlist.tracks[i + 1].duration,
                     name: state.playlist.tracks[i + 1].name
                  };

                  dispatch({ type: 'SET_SONG', song: songContextData });
                  dispatch({ type: 'PLAY' });

               } else {

                  const songContextData = {
                     artist: state.playlist?.tracks[0].artists_names,
                     id: state.playlist.tracks[0].track_id,
                     duration: state.playlist.tracks[0].duration,
                     name: state.playlist.tracks[0].name
                  };

                  dispatch({ type: 'SET_SONG', song: songContextData });
                  dispatch({ type: 'PLAY' });

               }

               break;

            }

         }

      }

   }, [dispatch, state?.playlist, state?.song]);

   const playPreviousSong = useCallback(() => { //TODO: refactor me!

      console.log('playing previous...');

      if (state?.playlist?.tracks.length) {

         for (let i = 0; i < state.playlist.tracks.length; i++) {

            if (state.playlist.tracks[i].track_id === state.song?.id) {

               if (state.playlist.tracks[i - 1]) {

                  const songContextData = {
                     artist: state.playlist?.tracks[i - 1].artists_names,
                     id: state.playlist.tracks[i - 1].track_id,
                     duration: state.playlist.tracks[i - 1].duration,
                     name: state.playlist.tracks[i - 1].name
                  };

                  dispatch({ type: 'SET_SONG', song: songContextData });
                  dispatch({ type: 'PLAY' });

               } else {

                  const songContextData = {
                     artist: state.playlist?.tracks[state.playlist.tracks.length - 1].artists_names,
                     id: state.playlist.tracks[state.playlist.tracks.length - 1].track_id,
                     duration: state.playlist.tracks[state.playlist.tracks.length - 1].duration,
                     name: state.playlist.tracks[state.playlist.tracks.length - 1].name
                  };

                  dispatch({ type: 'SET_SONG', song: songContextData });
                  dispatch({ type: 'PLAY' });

               }

               break;

            }

         }

      }

   }, [dispatch, state?.playlist, state?.song]);;

   return (
      <ControlsContainer>
         <Controls>
            <BackIcon handleClick={playPreviousSong} />
            {playing ? <PauseIcon /> : <PlayIcon />}
            <NextIcon handleClick={playNextSong} />
         </Controls>
         <Progress>
            <span>{time && duration ? formatTime(time * (duration / 100)) : '--:--'}</span>
            <VariableBar callback={setSongProgress} width='70%' value={time || 0} />
            <span>{formatTime(duration) || '--:--'}</span>
         </Progress>
      </ControlsContainer>
   );

};