import styled from 'styled-components';
import notLikedIcon from '../assets/images/ui_icons/not_liked.png';
import likedIcon from '../assets/images/ui_icons/liked.png';
import { SongData } from './PlaylistView';
import { playlistContextData, usePlayback } from '../state/PlaybackContext';
import { likeSongApi } from '../helpers/utils';

const AlbumDataContainer = styled.div`

   height: 100%;
   display: flex;
   position: absolute;
   left: 0;
   top: 0;

   img{
      display: inline-block;
      height: 100%;
      width: 100px;
   }

   i{
      width: 25px;
      height: 100%;
      display: flex;
      align-items: center;

      img{
         width: 100%;
         height: auto;
         cursor: pointer;
      }
   }

   div{

      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      max-width: 160px;
      padding: 0 20px;

      span{
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
      }
      
      span:first-of-type{
         font-weight: 400;
         font-size: 1.6rem;
         margin-bottom: 8px;
      }

      span:last-of-type{
         font-weight: 300;
         font-size: 1.4rem;
      }

   }

`;

type AlbumDataProps = {
   displayTracks?: SongData[];
   playlist: playlistContextData;
   song: SongData;
}

export const AlbumData: React.FC<AlbumDataProps> = ({ displayTracks, playlist, song }) => {

   const { dispatch } = usePlayback();

   const handleLike = () => {

      const newSongObject = { ...song, is_liked: !song.is_liked };

      likeSongApi(newSongObject);

      dispatch({ type: 'SET_SONG', song: newSongObject });

      if (displayTracks) {

         let songIndexInContextPlaylist;

         for (let i = 0; i < displayTracks.length; i++) {

            if (displayTracks[i].track_id === song.track_id) {

               songIndexInContextPlaylist = i;

               break;

            }

         }

         if (songIndexInContextPlaylist !== undefined) {

            const newPlaylistTracks = [...displayTracks];

            newPlaylistTracks[songIndexInContextPlaylist] = { ...newSongObject };

            dispatch({ type: 'SET_DISPLAY_TRACKS', tracks: newPlaylistTracks });

         }

      }

   };

   return (

      <AlbumDataContainer>
         <img alt='playlist thumbnail' src={playlist.image} />
         <div>
            <span>{song.name}</span>
            <span>{song.artists_names}</span>
         </div>
         <i>
            <img alt='heart icon' onClick={handleLike} src={song?.is_liked ? likedIcon : notLikedIcon} />
         </i>
      </AlbumDataContainer>

   );

};