import styled from 'styled-components';
import { AlbumData } from './TrackAlbumData';

const TrackWrapper = styled.div`

   grid-area: track;
   position: relative;
   display: flex;
   justify-content: space-between;
   box-shadow: 0 0 5px #F1F1F1;
   
`;

export const TrackContainer: React.FC = () => {

   const mockSongData = {
      image: 'http://api.sprintt.co/spotify/images/pop/p_9.jpg',
      songName: 'Square One',
      artist: 'Coldplay'
   };

   return (
      <TrackWrapper>
         <AlbumData song={mockSongData.songName} artist={mockSongData.artist} image={mockSongData.image} />
      </TrackWrapper>
   );

};