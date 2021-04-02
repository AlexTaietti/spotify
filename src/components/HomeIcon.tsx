import styled from 'styled-components';

export const HomeIcon: React.FC = () => {

   return (
      <Icon>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 83.126578 85.778359">
            <path
               d="m 3.201786,34.195674 v 48.38096 h 27.779065 v -26.45833 h 22.487814 v 26.45833 H 79.924921 V 34.195674 L 41.563353,3.2016351 Z"
               strokeWidth='5' fill='none' strokeLinecap='round' strokeLinejoin='miter' />
         </svg>
      </Icon>
   );

};

const Icon = styled.i`

   margin-right: 15px;
   height: 18px;
   width: 18px;
      
   path{
      stroke: var(--main-text);
      fill: none;
   }

`;