import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`

   &:hover{
      path:first-of-type{ fill: #c4c4c4; }
      path:last-of-type{ stroke: #c4c4c4; }
   }

`;

export const NextIcon: React.FC = () => {

   return (
      <Icon>
         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 6.34823C25 5.60362 25.6036 5 26.3482 5H26.5609C27.3055 5 27.9091 5.60362 27.9091 6.34823V23.6518C27.9091 24.3964 27.3055 25 26.5609 25H26.3482C25.6036 25 25 24.3964 25 23.6518V6.34823Z" fill="#191414" />
            <path d="M24.75 13.701C25.75 14.2783 25.75 15.7217 24.75 16.299L11.25 24.0933C10.25 24.6706 9 23.9489 9 22.7942L9 7.20577C9 6.05107 10.25 5.32938 11.25 5.90673L24.75 13.701Z" stroke="#191414" strokeWidth="3" />
         </svg>
      </Icon>
   );

};