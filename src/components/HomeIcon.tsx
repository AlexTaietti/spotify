import styled from 'styled-components';

export const HomeIcon: React.FC = () => {

   return (
      <i>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 86.127 93.875208">
            <path
               d="m 3.201786,42.292459 v 48.38096 h 27.779065 v -26.45833 h 22.487814 v 26.45833 H 79.924921 V 42.292459 L 41.563354,4.494849 Z"
               strokeWidth='9' fill='none' strokeLinecap='butt' strokeLinejoin='miter' />
         </svg>
      </i>
   );

};

const Icon = styled.i`

   svg{
      stroke: var(--big-text);
   }

`;