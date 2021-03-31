import styled from 'styled-components';
import { usePlaylistData } from '../state/hooks/usePlaylistData';
import { Carousel } from './Carousel';

export const Home: React.FC = () => {

   //get playlists from respective api endpoints
   const recentlyPlayed = usePlaylistData('recently_played_playlists?limit=10');
   const featured = usePlaylistData('featured_playlists?limit=10');
   const mood = usePlaylistData('mood_playlists?limit=10');

   return (

      (recentlyPlayed || featured || mood) ?

         <HomeWrapper>

            {recentlyPlayed && <Carousel title="Recently played" data={recentlyPlayed} />}
            {featured && <Carousel title="Featured playlists" data={featured} />}
            {mood && <Carousel title="Mood" data={mood} />}

         </HomeWrapper> : null

   );

};

const HomeWrapper = styled.div`

   position: relative;
   width: 100%;
   min-height: 100%;
   padding: 100px 115px;

`;