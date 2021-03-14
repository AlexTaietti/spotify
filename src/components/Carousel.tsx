import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlaylistCard } from './PlaylistCard';
import { PlayListData } from './PlaylistCard';

type CarouselProps = any;

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

export const Carousel: React.FC<CarouselProps> = (props) => {

   const mockData = {
      "playlists": [
         {
            "description": "Start your day with calm and cool jazz.",
            "image_url": "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
            "name": "Jazzy Morning",
            "playlist_id": "37i9dQZF1DXdziGPHNE40t"
         },
         {
            "description": "The home for alternative electronic music. Cover: Fred again.. and The Blessed Madonna",
            "image_url": "https://i.scdn.co/image/ab67706f0000000345e1025ae30404128c57d824",
            "name": "Altar",
            "playlist_id": "37i9dQZF1DXa71eg5j9dKZ"
         },
         {
            "description": "the loose knit sweater, diy bedroom mural wall, alt milk of playlists. ✨ featuring Still Woozy",
            "image_url": "https://i.scdn.co/image/ab67706f0000000330454e871ce5a1b00703716f",
            "name": "Lorem",
            "playlist_id": "37i9dQZF1DXdwmD5Q7Gxah"
         },
         {
            "description": "Smooth joints. Cover: Ruti",
            "image_url": "https://i.scdn.co/image/ab67706f00000003cb35da286acfe287316c4640",
            "name": "Butter",
            "playlist_id": "37i9dQZF1DWVzZlRWgqAGH"
         },
         {
            "description": "Feel great with these timelessly fun songs!",
            "image_url": "https://i.scdn.co/image/ab67706f00000003e649da22aa371c86c801603f",
            "name": "Have a Great Day!",
            "playlist_id": "37i9dQZF1DX7KNKjOK0o75"
         },
         {
            "description": "Chill beats for cool coffeehouse vibes.",
            "image_url": "https://i.scdn.co/image/ab67706f000000033f861d7f7b340e5e4934bb78",
            "name": "Lo-Fi Cafe",
            "playlist_id": "37i9dQZF1DX9RwfGbeGQwP"
         },
         {
            "description": "Lounge and chill out music for your workday.",
            "image_url": "https://i.scdn.co/image/ab67706f00000003f1ecb8caee4c015b3f33058a",
            "name": "Workday Lounge",
            "playlist_id": "37i9dQZF1DWT5lkChsPmpy"
         },
         {
            "description": "Curl up in your favorite spot with some sweet, mellow tunes...",
            "image_url": "https://i.scdn.co/image/ab67706f000000035ae7aa0454c9eafdd6505fda",
            "name": "Your Favorite Coffeehouse",
            "playlist_id": "37i9dQZF1DX6ziVCJnEm59"
         },
         {
            "description": "Chillout hip-hop vibes. Cover: Kota The Friend",
            "image_url": "https://i.scdn.co/image/ab67706f00000003dd2fb26650c3d75d8a32c972",
            "name": "Mellow Bars",
            "playlist_id": "37i9dQZF1DWT6MhXz0jw61"
         },
         {
            "description": "High-Key bangers for Low-Key enjoyment.",
            "image_url": "https://i.scdn.co/image/ab67706f00000003c0c5bb00461fd08b95f9b9da",
            "name": "Low-Key",
            "playlist_id": "37i9dQZF1DX2yvmlOdMYzV"
         }
      ]
   };

   const [visiblePlaylists, setVisiblePlaylists] = useState<any>([]);
   const [PlaylistPointer, setPlaylistPointer] = useState(5); //first 5 playlists

   useEffect(() => {

      const playlists = mockData.playlists.slice(PlaylistPointer - 5, PlaylistPointer);
      setVisiblePlaylists(playlists);

   }, [PlaylistPointer]);

   const changeDisplayedPlaylists = (direction: number) => {

      if (mockData.playlists.length < 6) return;

      if (direction > 0 && PlaylistPointer === 5) {
         setPlaylistPointer(currentPointer => currentPointer + 5);
      }

      if (direction < 0 && PlaylistPointer !== 5) {
         setPlaylistPointer(currentPointer => currentPointer - 5);
      }

   };

   return (
      <CarouselContainer>
         <h2>Recently played</h2>
         <CardsContainer>
            {visiblePlaylists.map((playlistData: PlayListData) =>
               <PlaylistCard key={playlistData.playlist_id} data={playlistData} />
            )}
            <Controls><span className={PlaylistPointer > 5 ? "active" : 'inactive'} onClick={() => changeDisplayedPlaylists(-1)}>&#8249;</span><span onClick={() => changeDisplayedPlaylists(1)} className={PlaylistPointer === 5 && mockData.playlists.length > 5 ? "active" : 'inactive'}>&#8250;</span></Controls>
         </CardsContainer>
      </CarouselContainer>
   );

};