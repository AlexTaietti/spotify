import styled from 'styled-components';

export const BrowseIcon: React.FC = () => {

   return (
      <Icon>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 73.686092 61.498694">
            <g strokeWidth='5'>
               <path
                  d="M 1.1113588,7.2462585 10.577355,59.406969 h 52.555484 l 9.44239,-52.1607105 z"
                  fill='none' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='4' />
               <path
                  d="m 10.565275,1.0260104 52.555485,0.02414"
                  strokeLinecap='round' strokeLinejoin='miter' strokeMiterlimit='4' />
               <ellipse
                  ry="11.376122"
                  rx="11.407397"
                  cy="32.872402"
                  cx="36.843018"
                  fill='none' strokeMiterlimit='4' />
            </g>
         </svg>
      </Icon>
   );

};

const Icon = styled.i`

   margin-right: 15px;
   height: 18px;
   width: 18px;

   svg{
      * {
         fill: none;
         stroke: var(--main-text);
      }
   }

`;