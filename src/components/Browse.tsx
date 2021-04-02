import styled from 'styled-components';
import { useSpotifyApi } from '../state/hooks/useSpotifyApi';
import { GenreData } from '../@types';
import { GenreCard } from './GenreCard';

export const Browse: React.FC = () => {

   const { response: genreData } = useSpotifyApi<{ categories: Array<GenreData> }>('categories');

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

const GenreContainer = styled.div`

   position: relative;
   display: block;
   min-height: 100%;
   width: 100%;
   max-width: 100%;
   padding: 130px 150px;

   h1{
      font-weight: 400;
      font-size: 2.8rem;
      color: var(--main-text);
      margin-bottom: 35px;
   }

`;

const Genres = styled.div`

   display: grid;
   gap: 3%;
   grid-template-columns: repeat(4, auto);

`;