import styled from 'styled-components';

export const TablePlayIcon: React.FC = () => {

   return (
      <i>
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
                  d="M 39.606819,73.76646 V 30.55496 L 76.637828,51.76788 Z" />
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