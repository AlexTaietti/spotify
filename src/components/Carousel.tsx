import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlaylistCard } from './PlaylistCard';
import { PlayListData } from './PlaylistCard';

const CarouselContainer = styled.div`

   display: block;
   position: relative;
   width: 100%;

   h2{
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: normal;
      letter-spacing: -1px;
   }

`;

const CardsContainer = styled.div`

   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(5, 1fr);
   position: relative;

`;

const Controls = styled.div`

   display: block;
   position: absolute;
   top: -40px;
   right: 0px;
   font-size: 30px;
   color: rgba(0, 0, 0, 0.4);
   cursor: pointer;
   user-select: none;

   span.active{ color: rgba(0, 0, 0, 1); }

   span:last-of-type{ margin-left: 10px; }

`;

type CarouselProps = {
   data: Array<PlayListData>;
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {

   const [visiblePlaylists, setVisiblePlaylists] = useState<PlayListData[]>([]);
   const [PlaylistPointer, setPlaylistPointer] = useState(5); //first 5 playlists

   useEffect(() => {

      const playlists = data.slice(PlaylistPointer - 5, PlaylistPointer);
      setVisiblePlaylists(playlists);

   }, [PlaylistPointer]);

   const showNext = () => {

      if (data.length > 5 && PlaylistPointer <= 5) {
         setPlaylistPointer(currentPointer => currentPointer + 5);
      }

   };

   const showPrev = () => {

      if (data.length > 5 && PlaylistPointer > 5) {
         setPlaylistPointer(currentPointer => currentPointer - 5);
      }

   }

   return (
      <CarouselContainer>
         <h2>Recently played</h2>
         <CardsContainer>
            {visiblePlaylists.map((playlistData: PlayListData) =>
               <PlaylistCard key={playlistData.playlist_id} data={playlistData} />
            )}
            <Controls>
               <span onClick={showPrev} className={PlaylistPointer > 5 ? "active" : 'inactive'}>&#8249;</span>
               <span onClick={showNext} className={PlaylistPointer <= 5 && data.length > 5 ? "active" : 'inactive'}>&#8250;</span>
            </Controls>
         </CardsContainer>
      </CarouselContainer>
   );

};