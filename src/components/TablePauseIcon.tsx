import styled from 'styled-components';

export const TablePauseIcon: React.FC = () => {

   return (
      <i>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 104.32142 104.32142">
            <g>
               <circle
                  strokeWidth='5.29166651' strokeMiterlimit='4'
                  cx="52.160709"
                  cy="52.160709"
                  r="49.514877" />
               <path
                  strokeWidth='7' strokeLinecap='round' strokeMiterlimit='4'
                  d="m 38.93155,32.694933 v 38.93155" />
               <path
                  strokeWidth='7' strokeLinecap='round' strokeLinejoin='miter' strokeMiterlimit='4'
                  d="m 65.76786,32.694933 v 38.93155" />
            </g>
         </svg>
      </i>
   );

};

const Icon = styled.i`

   svg{
      stroke: var(--big-text);
   }

`;