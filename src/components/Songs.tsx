import { SongData } from './PlaylistView';
import styled from 'styled-components';
import { HeartIcon } from './HeartIcon';
import { PlaystateIcon } from './PlaystateIcon';

const SongsTable = styled.table`

   width: 100%;
   max-width: 100%;
   text-align: left;
   border-collapse: collapse;
   table-layout: fixed;
   font-size: 2.2rem;
   color: #191414;
   margin-left: -60px;

`;

const TableHeadings = styled.thead`

   th{

      text-transform: uppercase;
      font-weight: 300;
      padding: 8px 10px;
      border-bottom: 1px solid #646464;

      &:first-of-type{ width: 70px }
      
      &:nth-of-type(2){ width: 48px; }

      &:last-of-type{ width: 8px; }

      &:first-of-type, &:last-of-type{ border-bottom: none; }

   }

`;

const SongRow = styled.tr`

   width: 100%;
   border-radius: 10px;

   td{

      font-weight: 400;
      padding: 15px 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      border-bottom: .5px solid #646464;
      transition: background .3s;

      img{
         transition: opacity .3s;
         width: 100%;
         cursor: pointer;
         display: block;
      }

      &:first-of-type, &:last-of-type{ border-bottom: none; }

      &:first-of-type{
         
         padding: 0 20px 0 24px;
         border-top-left-radius: 10px;
         border-bottom-left-radius: 10px;

         img{ opacity: 0; }

      }

      &:nth-of-type(2){ padding-left: 0 12px; }

      &:last-of-type{
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;
      }

   }

   &:hover{
      
      cursor: pointer;
      
      td {
         
         background: rgba(29, 185, 84, 0.2);
         
         &:first-of-type{ img{ opacity: 1; } }
      
      }
   
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
               <th>{ /* playstate icon column header */}</th>
               <th>{ /* heart icon column header */}</th>
               <th>title</th>
               <th>artist</th>
               <th>album</th>
               <th>release date</th>
               <th>{ /* empty column used as padding */}</th>
            </tr>
         </TableHeadings>
         <tbody>

            {songs.map(song =>

               <SongRow key={song.track_id}>
                  <PlaystateIcon />
                  <HeartIcon liked={song.is_liked} />
                  <td>{song.name}</td>
                  <td>{song.artists_names}</td>
                  <td>{song.album_name}</td>
                  <td>{song.release_date}</td>
                  <td>{ /* empty column used as padding */}</td>
               </SongRow>

            )}

         </tbody>
      </SongsTable>
   );

};