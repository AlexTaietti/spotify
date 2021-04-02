import styled from 'styled-components';

export const HeartIcon: React.FC = () => {

   return (
      <i>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115 105.32397">
            <path
               d="m 56.129706,95.781658 c 0,0 -30.260035,-26.118843 -46.8690517,-45.697321 C -6.6919878,31.279583 17.029999,3.6925574 32.69518,3.9712374 c 15.200415,0.27041 23.434526,15.3080366 23.434526,15.3080366 0,0 6.82727,-15.3080366 23.43452,-15.3080366 20.556554,0 40.323474,28.1592196 23.434524,46.1130996 C 88.060296,65.964732 56.129706,95.781658 56.129706,95.781658 Z"
               strokeWidth='7.9375' fill='none' strokeLinecap='butt' strokeLinejoin='miter' />
         </svg>
      </i>
   );

};

const Icon = styled.i`

   svg{
      stroke: var(--big-text);
   }

`;