import { SongData } from './PlaylistView';
import { HeartIcon } from './HeartIcon';
import { PlaystateIcon } from './PlaystateIcon';
import styled from 'styled-components';
import { usePlayback } from '../state/PlaybackContext';

const Row = styled.tr`

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

         &:not(.show) img{
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

type SongRowProps = {
   song: SongData;
   updateSong: (song: SongData) => void;
};

export const SongRow: React.FC<SongRowProps> = ({ song, updateSong }: SongRowProps) => {

   const { state, dispatch } = usePlayback();

   const handleAudio = (event: React.MouseEvent) => {

      if (state?.song?.id === song.track_id) {

         event.stopPropagation(); //prevent propagation since we don't need to set a new song in this case...

         state?.playing ? dispatch({ type: 'PAUSE' }) : dispatch({ type: 'PLAY' });

      }

   }

   return (
      <Row onClick={() => updateSong(song)}>
         <PlaystateIcon handleAudio={handleAudio} visible={state?.song?.id === song.track_id} playing={state?.song?.id === song.track_id && state?.playing} />
         <HeartIcon liked={song.is_liked} />
         <td>{song.name}</td>
         <td>{song.artists_names}</td>
         <td>{song.album_name}</td>
         <td>{song.release_date}</td>
      </Row>
   );

};