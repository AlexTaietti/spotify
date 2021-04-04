import { useState } from 'react';
import styled from 'styled-components';
import { CarouselProps, PlayListData } from '../@types';
import { PlaylistCard } from './PlaylistCard';

export const Carousel: React.FC<CarouselProps> = ({ data, title }) => {

   const [showEnd, setShowEnd] = useState(false);

   return (

      data ?

         <CarouselContainer>
            <h1>{title}</h1>
            <CardsContainer className={showEnd ? 'end' : 'start'}>
               {data.map((playlistData: PlayListData) =>
                  <PlaylistCard key={playlistData.playlist_id} data={playlistData} />
               )}
            </CardsContainer>
            <Controls>
               <span onClick={() => setShowEnd(false)} className={showEnd ? 'active' : 'inactive'}>&#8249;</span>
               <span onClick={() => setShowEnd(true)} className={showEnd ? 'inactive' : 'active'}>&#8250;</span>
            </Controls>
         </CarouselContainer> : null

   );

};

const CarouselContainer = styled.div`

   display: block;
   position: relative;
   width: 100%;
   max-width: 100%;
   overflow-x: hidden;

   h1{
      color: var(--main-text);
      margin-bottom: 25px;
      font-size: 2.8rem;
      font-weight: 400;
   }

   &:not(:last-of-type){ margin-bottom: 50px; }

`;

const CardsContainer = styled.div`

   display: grid;
   grid-template-columns: repeat(10, 17%);
   column-gap: calc((100% - (17% * 5)) / 4);
   position: relative;
   left: 0;
   transition-property: left;
   transition-duration: .7s;

   &.end{ left: calc(-100% - ((100% - (17% * 5)) / 4)); }

`;

const Controls = styled.div`

   display: block;
   position: absolute;
   top: 15px;
   right: 0px;
   font-size: 3rem;
   color: var(--disabled-carousel-control);
   cursor: pointer;
   user-select: none;

   span.active{ color: var(--active-carousel-control); }

   span:last-of-type{ margin-left: 10px; }

`;