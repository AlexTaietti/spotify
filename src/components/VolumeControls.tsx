import styled from 'styled-components';
import { VolumeProps } from '../@types';
import { VariableBar } from "./VariableBar";
import { VolumeIcon } from './VolumeIcon';

export const VolumeControls: React.FC<VolumeProps> = ({ setVolume, volume }) => {

   return (
      <VolumeContainer>
         <VolumeIcon />
         <VariableBar width='110px' value={volume} callback={setVolume} />
      </VolumeContainer>
   );

};

const VolumeContainer = styled.div`

   position: absolute;
   right: 0;
   top: 0;
   display: flex;
   height: 100%;
   margin-right: 3%;
   align-items: center;
   justify-content: center;

`;