import styled from 'styled-components';

export const VolumeIcon: React.FC = () => {

   return (
      <Icon>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92.402927 87.177417">
            <g>
               <path
                  d="M 2.2489583,27.462173 V 61.257938 L 19.635863,59.921588 49.80585,84.928936 c 0,0 -8.812028,-24.139857 -8.812028,-40.672056 0,-15.51362 8.812028,-42.0084036 8.812028,-42.0084036 L 19.635863,28.531245 Z"
                  strokeWidth='5' strokeLinecap='butt' strokeLinejoin='round' strokeMiterlimit='4' />
               <path
                  d="m 59.040656,28.427826 c 0,0 5.879162,6.886244 5.836346,15.480183 -0.03859,7.745592 -6.370885,15.91016 -6.370885,15.91016"
                  strokeWidth='5' strokeLinecap='round' strokeMiterlimit='4' />
               <path
                  d="m 70.756932,11.722369 c 0,0 15.314246,10.762401 15.39678,32.18564 0.07309,18.972664 -15.39678,31.009777 -15.39678,31.009777"
                  strokeWidth='5' strokeLinecap='round' strokeMiterlimit='4' />
            </g>
         </svg>
      </Icon>
   );

};

const Icon = styled.i`

   display: inline-block;
   margin-right: 12px;
   height: 21px;
   cursor: pointer;

   svg{

      height: 100%;
      
      path {
         fill: none; 
         stroke: var(--main-text);
      }
   
   }

`;