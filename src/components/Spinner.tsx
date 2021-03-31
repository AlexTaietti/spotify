import styled, { keyframes } from 'styled-components';

export const Spinner: React.FC = () => {

   return (
      <SpinnerOuter>
         <SpinnerInner />
      </SpinnerOuter>
   );

};

const rotateBack = keyframes`
  0%{ transform: rotateY(180deg); }
  50%{ transform: rotateY(360deg); }
  100%{ transform: rotateY(180deg); }
`;

const rotateFront = keyframes`
  0%{ transform: rotateY(0deg); }
  50%{ transform: rotateY(180deg); }
  100%{ transform: rotateY(360deg); }
`;

const SpinnerOuter = styled.div`

   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   height: 100%;
   width: 100%;

`;

const SpinnerInner = styled.div`

   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   height: auto;
   width: auto;
   font-size: 5rem;

   &::before, &::after{

      backface-visibility: hidden;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

   }


   &::before{
      
      content: '⌛';
      animation-name: ${rotateBack};
      position: absolute;
      transform: rotateY(180deg);
   
   }
   
   &::after{
      
      content: '🎸';
      animation-name: ${rotateFront};
      position: relative;
      transform: rotateY(0deg);

   }

`;