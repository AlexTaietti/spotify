import styled from 'styled-components';
import { GenreData } from './Browse';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formatSlug } from '../helpers/utils';

const Card = styled.div`

   position: relative;
   width: 100%;
   padding-top: 100%;
   background: url(${(props: CardProps) => props.image}) center/cover;
   border-radius: 15px;
   overflow: hidden;

   a{

       &::before{
         content: '';
         position: absolute;
         height: 100%;
         width: 100%;
         top: 0;
         left: 0;
         background: rgba(0, 0, 0, 0.3);
      }

      &::after{
         content: '${(props: CardProps) => props.name}';
         font-size: 3em;
         font-weight: 500;
         color: white;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }

   }


`;

type CardProps = {
   name: string;
   image: string;
};

export const GenreCard: React.FC<{ data: GenreData }> = ({ data }) => {

   const [genreSlug, setGenreSlug] = useState<string>();

   useEffect(() => {

      const slug = formatSlug(data.category_name);

      setGenreSlug(slug);

   }, [data]);

   return (
      <Card image={data.image_url} name={data.category_name}>
         <Link to={{
            pathname: `/genre/${genreSlug}`,
            state: {
               id: data.category_id,
               image: data.image_url,
               name: data.category_name
            }
         }}></Link>
      </Card>
   );

}