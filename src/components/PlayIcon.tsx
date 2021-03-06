import styled from 'styled-components';
import { usePlayback } from '../state/PlaybackContext';

export const PlayIcon: React.FC = () => {

   const { dispatch } = usePlayback();

   return (
      <Icon role="button" aria-label='toggle playstate' onClick={() => dispatch({ type: 'PLAY' })}>
         <svg width="23" height="26" viewBox="0 0 23 26" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.75 14.299L4.25 23.8253C3.25 24.4027 2 23.681 2 22.5263L2 3.47371C2 2.31902 3.25 1.59733 4.25 2.17468L20.75 11.701C21.75 12.2783 21.75 13.7217 20.75 14.299Z" stroke="#191414" strokeWidth="3" />
         </svg>
      </Icon>
   );

};

const Icon = styled.i`

   margin: 0 65px;

   path{
      fill: none;
      stroke: var(--idle-track-control);
   }

   &:hover{
      path{ stroke: var(--selected-track-control); }
   }

`;
