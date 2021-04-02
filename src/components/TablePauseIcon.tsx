import styled from 'styled-components';

export const PauseIcon: React.FC = () => {

   return (
      <Icon>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 104.32142 104.32142">
            <g>
               <circle
                  strokeWidth='5.29166651' strokeMiterlimit='4' fill='none'
                  cx="52.160709"
                  cy="52.160709"
                  r="49.514877" />
               <path
                  strokeWidth='6' strokeLinecap='round' strokeMiterlimit='4'
                  d="m 38.93155,32.694933 v 38.93155" />
               <path
                  strokeWidth='6' strokeLinecap='round' strokeLinejoin='miter' strokeMiterlimit='4'
                  d="m 65.76786,32.694933 v 38.93155" />
            </g>
         </svg>
      </Icon>
   );

};

const Icon = styled.i`

   svg{

      width: 100%;

      * { stroke: var(--big-text); }
   }

`;