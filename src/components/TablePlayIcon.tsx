import styled from 'styled-components';

export const PlayIcon: React.FC = () => {

   return (
      <Icon>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 104.32142 104.32142">
            <g>
               <circle
                  strokeWidth='5.29166698' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='4'
                  cx="52.160709"
                  cy="52.160709"
                  r="49.514877" />
               <path
                  strokeWidth='5.29166698' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='4'
                  d="M 41.760605,73.880522 V 30.440906 L 74.484019,51.76581 Z" />
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