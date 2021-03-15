import React from 'react';
import styled from 'styled-components';

export type PlayListData = {
   description: string;
   image_url: string;
   name: string;
   playlist_id: string;
};

type PlaylistCardProps = {
   data: PlayListData;
};

const FadeOverlay = styled.div`

   position: absolute;
   z-index: 1;
   background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 79%, rgba(242,247,241,1) 100%);
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;

`;

const Card = styled.div`

   position: relative;
   height: 240px;
   overflow: hidden;
   flex-basis: 150px;

   a{
      display: inline-block;
      height: 100%;
   }

   img{
      width: 100%;
      margin-bottom: 15px;
      border-radius: 10px;
   }

   h2{
      font-weight: bolder;
      font-size: 18px;
   }

   p{
      color: rgb(109, 109, 109);
      font-size: 14px;
   }

`;

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ data }) => {

   return (
      <Card id={data.playlist_id}>
         <a>
            <img src={data.image_url} />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <FadeOverlay />
         </a>
      </Card>
   );

};