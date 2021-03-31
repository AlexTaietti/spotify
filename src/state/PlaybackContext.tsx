import React, { useReducer } from 'react';
import { SongData } from '../components/PlaylistView';

const PlaybackContext = React.createContext<

   { state: PlaybackState; dispatch: PlaybackDispatch } | undefined

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

const PlaybackProvider = ({ children }: PlaybackProviderProps) => {

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

export type playlistContextData = {
   id: number;
   tracks: Array<SongData>;
   image: string;
};

type Action = { type: 'SET_PLAYLIST', playlist: playlistContextData } | { type: 'SET_DISPLAY_TRACKS', tracks: SongData[] | undefined } | { type: 'SET_SONG', song: SongData } | { type: 'PAUSE' } | { type: 'PLAY' };

type PlaybackDispatch = (action: Action) => void

type PlaybackState = {

   playlist?: playlistContextData;

   displayTracks?: SongData[];

   song?: SongData;

   playing?: boolean;

   lastSong?: number;

   lastPlaylist?: number;

};

type PlaybackProviderProps = { children: React.ReactNode };

export { PlaybackProvider, usePlayback };