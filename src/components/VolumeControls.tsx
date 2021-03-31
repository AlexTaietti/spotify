import styled from 'styled-components';
import volumeIcon from '../assets/images/ui_icons/volume_icon.png';
import { VariableBar } from "./VariableBar";

export const VolumeControls: React.FC<VolumeProps> = ({ setVolume, volume }) => {

   return (
      <VolumeContainer>
         <i><img alt='volume icon' src={volumeIcon} /></i>
         <VariableBar width='110px' value={volume} callback={setVolume} />
      </VolumeContainer>
   );

};

type VolumeProps = {
   volume: number;
   setVolume: React.Dispatch<React.SetStateAction<number>>;
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

   i{

      display: inline-block;
      width: 20px;
      margin-right: 12px;
      cursor: pointer;

      img{ width: 100%; }

   }

`;