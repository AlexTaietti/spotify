import styled from 'styled-components';
import { SongsProps } from '../@types';
import { SongRow } from './SongRow';

export const Songs: React.FC<SongsProps> = ({ songs, updateSong }) => {

   return (
      <SongsTable>
         <TableHeadings>
            <tr>
               <th>{ /* playstate icon column header */}</th>
               <th>{ /* heart icon column header */}</th>
               <th>title</th>
               <th>artist</th>
               <th>album</th>
               <th>release date</th>
            </tr>
         </TableHeadings>
         <tbody>
            {songs.map(song => <SongRow updateSong={updateSong} key={song.track_id} song={song} />)}
         </tbody>
      </SongsTable>
   );

};

const SongsTable = styled.table`

   width: 100%;
   text-align: left;
   border-collapse: collapse;
   table-layout: fixed;
   font-size: 1.9rem;
   color: var(--main-text);
   margin-left: -70px; /* making up for the first "invisible" column and keeping the table centered */

`;

const TableHeadings = styled.thead`

   th{

      text-transform: uppercase;
      font-weight: 300;
      padding: 8px 10px;
      border-bottom: 1px solid var(--songs-table-frame-color);
      white-space: nowrap;
      width: 25%;

      &:first-of-type{  /* width of the playstate icon's column */
         width: 70px;
         border-bottom: none;
      }
      
      &:nth-of-type(2){ width: 48px; } /* width of the heart icon's column */

      &:nth-of-type(3){ width: 30%; } /* width of the song names column */

   }

`;