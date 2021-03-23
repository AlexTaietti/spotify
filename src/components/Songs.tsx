import { SongData } from './PlaylistView';
import styled from 'styled-components';
import { HeartIcon } from './HeartIcon';
import { PlaystateIcon } from './PlaystateIcon';

const SongsTable = styled.table`

   width: 100%;
   text-align: left;
   border-collapse: collapse;
   table-layout: fixed;
   font-size: 1.9rem;
   color: #191414;
   margin-left: -70px; /* making up for the first "invisible" column and keeping the table centered */

`;

const TableHeadings = styled.thead`

   th{

      text-transform: uppercase;
      font-weight: 300;
      padding: 8px 10px;
      border-bottom: 1px solid #646464;
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

const SongRow = styled.tr`

   cursor: pointer;

   td{

      font-weight: 400;
      padding: 15px 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      border-bottom: .5px solid #646464;
      transition: background .3s;

      img{
         width: 100%;
         display: block;
      }

      &:first-of-type{
         
         padding: 0 20px 0 24px;
         border-top-left-radius: 10px;
         border-bottom-left-radius: 10px;
         border-bottom: none;

         img{
            transition: opacity .3s;
            opacity: 0;
         }

      }

      &:nth-of-type(2){ padding-left: 0 12px; }

      &:last-of-type{
         
         position: relative;
         overflow: visible;

         &:after{
            content: '';
            transition: inherit;
            position: absolute;
            width: 8px;
            height: 100%;
            top: 0;
            right: -8px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
         }

      }

   }

   &:hover{
      
      td {

         background: rgba(29, 185, 84, 0.2);

         &:first-of-type img{ opacity: 1; }

         &::after{ background: rgba(29, 185, 84, 0.2); }
      
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
               </SongRow>

            )}

         </tbody>
      </SongsTable>
   );

};