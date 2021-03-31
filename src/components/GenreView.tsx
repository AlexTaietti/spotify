import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { usePlaylistData } from '../state/hooks/usePlaylistData';
import { GenresLocationState } from '../@types';
import { PlaylistCard } from './PlaylistCard';
import { SectionHeader } from './SectionHeader';

export const GenreView: React.FC = () => {

   const { state: locationState } = useLocation<GenresLocationState>();

   const playlists = usePlaylistData(`category_playlists/${locationState.id}`);

   return (

      playlists ?

         <GenreViewWrapper>
            <SectionHeader imageUrl={locationState.image} name={locationState.name} itemsLabel={'playlists'} songNumber={playlists.length} />
            <PlaylistsTableWrapper>
               <PlaylistsTable>
                  {playlists.map(playlist => <PlaylistCard key={playlist.playlist_id} data={playlist} />)}
               </PlaylistsTable>
            </PlaylistsTableWrapper>
         </GenreViewWrapper> : null

   );

};

const GenreViewWrapper = styled.div`

   position: relative;
   height: 100%;
   width: 100%;

`;

const PlaylistsTableWrapper = styled.div`

   position: relative;
   width: 100%;
   padding: 100px;

`;

const PlaylistsTable = styled.div`

   display: grid;
   position: relative;
   width: 100%;
   height: 100%;
   grid-auto-rows: 1fr;
   grid-template-columns: repeat(5, 17%);
   column-gap: calc((100% - (17% * 5)) / 4);
   row-gap: 50px;

`;