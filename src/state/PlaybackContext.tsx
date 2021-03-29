import React, { useReducer } from 'react';
import { SongData } from '../components/PlaylistView';

export type playlistContextData = {
   id: number;
   tracks: Array<SongData>;
   image: string;
}

type Action = { type: 'SET_PLAYLIST', playlist: playlistContextData } | { type: 'SET_DISPLAY_TRACKS', tracks: SongData[] } | { type: 'SET_SONG', song: SongData } | { type: 'UPDATE_SONG', song: SongData } | { type: 'PAUSE' } | { type: 'PLAY' };

type PlaybackDispatch = (action: Action) => void

type PlaybackState = {

   playlist?: playlistContextData;

   displayTracks?: SongData[];

   song?: SongData;

   playing?: boolean;

   lastSong?: number;

} | undefined;

type PlaybackProviderProps = { children: React.ReactNode };

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
         }

      case 'UPDATE_SONG':
         return {
            ...state,
            song: action.song
         }

      case 'SET_PLAYLIST':
         return {
            ...state,
            playlist: action.playlist
         }

      case 'SET_DISPLAY_TRACKS':
         return {
            ...state,
            displayTracks: action.tracks
         }

      case 'PLAY':
         return {
            ...state,
            playing: true
         }

      case 'PAUSE':
         return {
            ...state,
            playing: false
         }

      default: {
         return state;
      }

   }

}

function PlaybackProvider({ children }: PlaybackProviderProps) {

   const [playbackState, playbackDispatch] = useReducer(playbackReducer, { playlist: undefined, song: undefined, playing: false });

   const value = { state: playbackState, dispatch: playbackDispatch };

   return (

      <PlaybackContext.Provider value={value}>

         {children}

      </PlaybackContext.Provider>

   )

}

function usePlayback() {

   const context = React.useContext(PlaybackContext);

   if (context === undefined) throw new Error('usePlayback must be used within a PlaybackProvider');

   return context;

}

export { PlaybackProvider, usePlayback };