import styled from 'styled-components';
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

   const mockSongData = {
      image: 'http://api.sprintt.co/spotify/images/pop/p_9.jpg',
      songName: 'Square One',
      artist: 'Coldplay',
      progress: {
         elapsed: '0:40',
         duration: '4:23'
      },
      volume: 50
   };

   return (
      <TrackWrapper>
         <AlbumData song={mockSongData.songName} artist={mockSongData.artist} image={mockSongData.image} />
         <TrackControls progress={mockSongData.progress} />
         <VolumeControls volume={mockSongData.volume} />
      </TrackWrapper>
   );

};