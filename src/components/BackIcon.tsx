import styled from 'styled-components';

export const BackIcon: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {

   return (
      <Icon role="button" aria-label='play the previous song' onClick={handleClick}>
         <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 23.6518C5 24.3964 4.39638 25 3.65177 25L3.43914 25C2.69453 25 2.09091 24.3964 2.09091 23.6518L2.09091 6.34823C2.09091 5.60362 2.69454 5 3.43914 5L3.65177 5C4.39638 5 5 5.60362 5 6.34823L5 23.6518Z" />
            <path d="M5.25 16.299C4.25 15.7217 4.25 14.2783 5.25 13.701L18.75 5.90673C19.75 5.32938 21 6.05107 21 7.20577L21 22.7942C21 23.9489 19.75 24.6706 18.75 24.0933L5.25 16.299Z" strokeWidth="3" />
         </svg>
      </Icon>
   );

};

const Icon = styled.i`

   path:first-of-type{
      stroke: none;
      fill: var(--idle-track-control);
   }

   path:last-of-type{
      stroke: var(--idle-track-control);
      fill: none;
   }

   &:hover{

      path:first-of-type{ fill: var(--selected-track-control); }

      path:last-of-type{ stroke: var(--selected-track-control); }

   }

`;