import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatSlug } from '../helpers/utils';
import { Link } from 'react-router-dom';

const Card = styled.div`

   position: relative;
   width: 17%;
   min-width: 150px;
   max-width: 200px;
   user-select: none;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 4;
   white-space: normal;
   overflow: hidden;

   a{
      color: #191414;
   }

   img{
      width: 100%;
      margin-bottom: 15px;
      border-radius: 10px;
   }

   h2{
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2rem;
      margin-bottom: 5px;
   }

   p{
      color: rgb(109, 109, 109);
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 1.9rem;
   }

`;

export type PlayListData = {
   description: string;
   image_url: string;
   name: string;
   playlist_id: string;
};

type PlaylistCardProps = {
   data: PlayListData;
};

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ data }) => {

   const [playlistSlug, setPlaylistSlug] = useState<string>();

   useEffect(() => {

      const slug = formatSlug(data.name);

      setPlaylistSlug(slug);

   }, [data]);

   return (
      <Card id={data.playlist_id}>
         <Link to={{
            pathname: `/playlist/${playlistSlug}`,
            state: {
               id: data.playlist_id,
               image: data.image_url,
               name: data.name,
               description: data.description
            }
         }}>
            <img alt={`${data.name} playlist cover`} src={data.image_url} />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
         </Link>
      </Card>
   );

};