import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatSlug } from '../helpers/utils';
import { Link } from 'react-router-dom';
import { GenreData, CardProps } from '../@types';

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

};

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
         background: var(--overlay-color);
      }

      &::after{
         content: '${(props: CardProps) => props.name}';
         font-size: 3em;
         font-weight: 500;
         color: var(--overlay-text-color);
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }

   }


`;