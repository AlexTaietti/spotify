import React, { useReducer } from 'react';
import { PlaybackState, Action } from '../@types';

const PlaybackContext = React.createContext<

   { state: PlaybackState; dispatch: (action: Action) => void } | undefined

>(undefined);

const playbackReducer = (state: PlaybackState, action: Action): PlaybackState => {

   switch (action.type) {

      case 'SET_SONG':
         return {
            ...state,
            lastSong: state?.song?.track_id,
            song: action.song
         };

      case 'SET_PLAYLIST':
         return {
            ...state,
            lastPlaylist: state?.playlist?.id,
            playlist: action.playlist
         };

      case 'SET_DISPLAY_TRACKS':
         return {
            ...state,
            displayTracks: action.tracks
         };

      case 'PLAY':
         return {
            ...state,
            playing: true
         };

      case 'PAUSE':
         return {
            ...state,
            playing: false
         };

      default: return state;

   };

};

const PlaybackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   const [playbackState, playbackDispatch] = useReducer(playbackReducer, {});

   const value = { state: playbackState, dispatch: playbackDispatch };

   return (
      <PlaybackContext.Provider value={value}>
         {children}
      </PlaybackContext.Provider>
   );

};

const usePlayback = () => {

   const context = React.useContext(PlaybackContext);

   if (context === undefined) throw new Error('usePlayback must be used within a PlaybackProvider');

   return context;

};

export { PlaybackProvider, usePlayback };