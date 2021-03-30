import React from 'react';
import styled from 'styled-components';

const EmptyPlaylistMessage = styled.div`

   position: relative;
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;

   span{
      font-weight: 300;
      font-size: 7rem;
      color: #191414;
   }

`;

export const EmptyPlaylist: React.FC<{ message?: string }> = ({ message }) => {

   return (
      <EmptyPlaylistMessage>
         <span>{message || 'Playlist is empty'}</span>
      </EmptyPlaylistMessage>
   )
}