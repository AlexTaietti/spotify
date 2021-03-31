import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlaylistCard } from './PlaylistCard';
import { PlayListData } from './PlaylistCard';

export const Carousel: React.FC<CarouselProps> = ({ data, title }) => {

   const [visiblePlaylists, setVisiblePlaylists] = useState<PlayListData[]>();
   const [PlaylistPointer, setPlaylistPointer] = useState(5); //first 5 playlists

   useEffect(() => {

      const playlists = data.slice(PlaylistPointer - 5, PlaylistPointer);

      setVisiblePlaylists(playlists);

   }, [PlaylistPointer, data]);

   const showNext = () => {

      if (data.length > 5 && PlaylistPointer <= 5) setPlaylistPointer(currentPointer => currentPointer + 5);

   };

   const showPrev = () => {

      if (data.length > 5 && PlaylistPointer > 5) setPlaylistPointer(currentPointer => currentPointer - 5);

   };

   return (

      visiblePlaylists ?

         <CarouselContainer>
            <h1>{title}</h1>
            <CardsContainer>
               {visiblePlaylists.map((playlistData: PlayListData) =>
                  <PlaylistCard key={playlistData.playlist_id} data={playlistData} />
               )}
               <Controls>
                  <span onClick={showPrev} className={PlaylistPointer > 5 ? "active" : 'inactive'}>&#8249;</span>
                  <span onClick={showNext} className={PlaylistPointer <= 5 && data.length > 5 ? "active" : 'inactive'}>&#8250;</span>
               </Controls>
            </CardsContainer>
         </CarouselContainer> : null

   );

};

type CarouselProps = {
   title: string;
   data: Array<PlayListData>;
};

const CarouselContainer = styled.div`

   display: block;
   position: relative;
   width: 100%;

   h1{
      margin-bottom: 25px;
      font-size: 2.8rem;
      font-weight: 400;
   }

   &:not(:last-of-type){ margin-bottom: 50px; }

`;

const CardsContainer = styled.div`

   display: grid;
   grid-template-columns: repeat(5, 17%);
   column-gap: calc((100% - (17% * 5)) / 4);
   position: relative;

`;

const Controls = styled.div`

   display: block;
   position: absolute;
   top: -40px;
   right: 0px;
   font-size: 3rem;
   color: rgba(0, 0, 0, 0.4);
   cursor: pointer;
   user-select: none;

   span.active{ color: rgba(0, 0, 0, 1); }

   span:last-of-type{ margin-left: 10px; }

`;