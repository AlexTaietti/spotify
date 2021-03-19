import { SongData } from './PlaylistView';
import styled from 'styled-components';
import { HeartIcon } from './HeartIcon';

const SongsTable = styled.table`

   width: 100%;
   max-width: 100%;
   text-align: left;
   border-collapse: collapse;
   table-layout: fixed;
   font-size: 2.2rem;
   color: #191414;

`;

const TableHeadings = styled.thead`

   tr { border-bottom: 1px solid #646464; }

   th{

      text-transform: uppercase;
      font-weight: 300;
      padding: 8px 10px;

      &:first-of-type{ width: 70px; }

   }

`;

const SongRow = styled.tr`

   border-bottom: .5px solid #646464;
   width: 100%;

   td{

      font-weight: 400;
      padding: 15px 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &:first-of-type{ padding-left: 10px; }

   }

`;

type SongsProps = {
   songs: Array<SongData>;
}

export const Songs: React.FC<SongsProps> = ({ songs }) => {

   return (
      <SongsTable>
         <TableHeadings>
            <tr>
               <th></th>
               <th>title</th>
               <th>artist</th>
               <th>album</th>
               <th>release date</th>
            </tr>
         </TableHeadings>
         <tbody>
            {songs.map(song =>

               <SongRow key={song.track_id}>
                  <HeartIcon liked={song.is_liked} />
                  <td>{song.name}</td>
                  <td>{song.artists_names}</td>
                  <td>{song.album_name}</td>
                  <td>{song.release_date}</td>
               </SongRow>

            )}
         </tbody>
      </SongsTable>
   );

};