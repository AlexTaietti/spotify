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

const Card = styled.div`

   position: relative;
   height: 210px;
   text-overflow: ellipsis;

   a{
      display: inline-block;
      height: 100%;
      overflow: hidden;
   }

   img{
      width: 100%;
      max-height: 150px;
      margin-bottom: 10px;
      border-radius: 10px;
   }

   span{
      font-weight: bolder;
      font-size: 15px;
      letter-sapcing: -1px;
   }

   p{
      color: rgb(109, 109, 109);
      font-size: 12px;
   }

`;

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ data }) => {

   return (
      <Card id={data.playlist_id}>
         <a>
            <img src={data.image_url} />
            <span>{data.name}</span>
            <p>{data.description}</p>
         </a>
      </Card>
   );

};