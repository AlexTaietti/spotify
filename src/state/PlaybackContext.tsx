import React, { useState, useReducer } from 'react';

type Action = any;

type Dispatch = (action: Action) => void

type State = { [prop: string]: any };

type PlaybackProviderProps = { children: React.ReactNode }

const PlaybackContext = React.createContext<

   { state: State; dispatch: Dispatch } | undefined

>(undefined);

function playbackReducer(state: State, action: Action) {

   switch (action.type) {

      case 'increment': {

         return { count: state.count + 1 }

      }

      default: {

         throw new Error(`Unhandled action type: ${action.type}`)

      }

   }

}

function CountProvider({ children }: PlaybackProviderProps) {

   const [state, dispatch] = React.useReducer(playbackReducer, { count: 0 });

   const value = { state, dispatch }

   return (

      <PlaybackContext.Provider value={value}>

         {children}

      </PlaybackContext.Provider>

   )

}

function usePlayback() {

   const context = React.useContext(PlaybackContext);

   if (context === undefined) throw new Error('useCount must be used within a CountProvider');

   return context

}

export { CountProvider, usePlayback };