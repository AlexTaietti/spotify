import styled from 'styled-components';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { GenreCard } from './GenreCard';

const GenreContainer = styled.div`

   position: relative;
   display: block;
   min-height: 100%;
   min-width: 100%;
   padding: 130px 150px;

   h1{
      font-weight: 400;
      font-size: 2.8rem;
      color: #191414;
      margin-bottom: 35px;
   }

`;

const Genres = styled.div`

   display: grid;
   gap: 3%;
   grid-template-columns: repeat(4, auto);

`;

export type GenreData = {
   category_id: number;
   category_name: string,
   image_url: string;
};

export type GenresApiObject = {
   categories: GenreData[];
};

export const Browse: React.FC = () => {

   const { response: genreData } = useSpotifyApi<GenresApiObject>('categories');

   return (

      genreData ?

         <GenreContainer>
            <h1>Genres</h1>
            <Genres>
               {genreData.categories.map(genre => <GenreCard key={genre.category_id} data={genre} />)}
            </Genres>
         </GenreContainer> : null

   );

};