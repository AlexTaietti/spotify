import styled from 'styled-components';

export const EmptyPlaylist: React.FC<{ message?: string }> = ({ message }) => {

   return (
      <EmptyPlaylistMessage>
         <span>{message || 'Playlist is empty'}</span>
      </EmptyPlaylistMessage>
   );

};

const EmptyPlaylistMessage = styled.div`

   position: relative;
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;

   span{
      font-weight: 300;
      font-size: 5rem;
      color: var(--main-text);
   }

`;