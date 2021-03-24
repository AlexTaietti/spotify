import styled from 'styled-components';
import { usePlayback } from '../state/PlaybackContext';
import { AlbumData } from './TrackAlbumData';
import { TrackControls } from './TrackControls';
import { VolumeControls } from './VolumeControls';

const TrackWrapper = styled.div`

   grid-area: track;
   display: flex;
   justify-content: space-between;
   box-shadow: 0 0 5px #f1f1f1;
   
`;

export const TrackContainer: React.FC = () => {

   const { state } = usePlayback();

   const progress = {
      elapsed: '0:40',
      duration: '4:23'
   };

   const volume = 50;

   return (
      <TrackWrapper>
         <AlbumData song={state?.song?.name} artist={state?.song?.artists_names} image={state?.playlist?.image} />
         <TrackControls playing={state?.audio} progress={progress} />
         <VolumeControls volume={volume} />
      </TrackWrapper>
   );

};