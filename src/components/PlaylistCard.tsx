import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatSlug, getResource, notifySongApi } from '../helpers/utils';
import { Link } from 'react-router-dom';
import { playlistContextData, usePlayback } from '../state/PlaybackContext';
import pauseIcon from '../assets/images/ui_icons/light_pause_icon.png';
import playIcon from '../assets/images/ui_icons/light_play_icon.png';

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ data }) => {

   const [playlistSlug, setPlaylistSlug] = useState<string>();

   const [active, setActive] = useState(false);

   const { state, dispatch } = usePlayback();

   useEffect(() => {

      const slug = formatSlug(data.name);

      setPlaylistSlug(slug);

   }, [data]);

   useEffect(() => {

      if (state?.playlist?.id === data.playlist_id && state.playing) {

         setActive(true);

      } else { setActive(false); }

   }, [state?.playing, state?.playlist, data.playlist_id]);

   const handleClick = async (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {

      if (state?.playlist?.id === data.playlist_id) {

         state?.playing ? dispatch({ type: 'PAUSE' }) : dispatch({ type: 'PLAY' });

      } else {

         if (!active) {

            const playlistDetails = await getResource<playlistContextData>(`playlist_tracks/${data.playlist_id}`);

            const playlistContextData = {
               id: data.playlist_id,
               tracks: [...playlistDetails.tracks],
               image: data.image_url
            };

            const playlistFirstTrack = playlistContextData.tracks[0];

            dispatch({ type: 'SET_PLAYLIST', playlist: playlistContextData });
            dispatch({ type: 'SET_SONG', song: playlistFirstTrack });

            notifySongApi(playlistContextData.id, playlistFirstTrack.track_id);

            if (!state?.playing) dispatch({ type: 'PLAY' });

         }

      }

   }

   return (
      <Card>
         <Thumbnail className={active ? 'active' : 'thumbnail'} active={active} onClick={handleClick}>
            <img alt={`${data.name} playlist cover`} src={data.image_url} />
         </Thumbnail>
         <Link to={{
            pathname: `/playlist/${playlistSlug}`,
            state: {
               id: data.playlist_id,
               image: data.image_url,
               name: data.name,
               description: data.description
            }
         }}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
         </Link>
      </Card>
   );

};


export type PlayListData = {
   description: string;
   image_url: string;
   name: string;
   playlist_id: number;
};

type PlaylistCardProps = {
   data: PlayListData;
};


type ThumbnailProps = {
   active: boolean;
};

const Thumbnail = styled.div`

   position: relative;
   width: 100%;
   margin-bottom: 15px;
   cursor: pointer;

   img, &::before{ border-radius: 10px; }

   img{
      height: 100%;
      width: 100%;
   }

   &::before, &::after{
      transition: opacity .3s;
      content: '';
      opacity: 0;
      position: absolute;
   }

   &::before{
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
   }

   &::after{
      z-index: 1;
      height: 50px;
      width: 50px;
      background: url(${({ active }: ThumbnailProps) => active ? pauseIcon : playIcon}) no-repeat center/cover;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   &:hover, &.active{
      &::before, &::after{ opacity: 1; }
   }

`;

const Card = styled.div`

   position: relative;
   user-select: none;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 4;
   white-space: normal;
   overflow: hidden;

   a{ color: #191414; }

   h2{
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2rem;
      margin-bottom: 5px;
   }

   p{
      color: rgb(109, 109, 109);
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 1.9rem;
   }

`;