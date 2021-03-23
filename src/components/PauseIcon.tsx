import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`

   margin: 0 65px;

   &:hover path{ fill: #c4c4c4; }

`;

export const PauseIcon: React.FC = () => {

   return (
      <Icon>
         <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2H20ZM16 24C16 25.1046 16.8954 26 18 26C19.1046 26 20 25.1046 20 24H16ZM0 24C0 25.1046 0.89543 26 2 26C3.10457 26 4 25.1046 4 24H0ZM4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2H4ZM16 2V24H20V2H16ZM4 24V2H0V24H4Z" fill="#191414" />
         </svg>
      </Icon>
   );

};