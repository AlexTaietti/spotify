import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatSlug, getResource, notifySongApi } from '../helpers/utils';
import { Link } from 'react-router-dom';
import { playlistContextData, usePlayback } from '../state/PlaybackContext';

const Card = styled.div`

   position: relative;
   width: 17%;
   user-select: none;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 4;
   white-space: normal;
   overflow: hidden;

   &:not(:first-of-type){ margin-left: calc((100% - (17% * 5)) / 4); }

   a{ color: #191414; }

   img{
      cursor: pointer;
      width: 100%;
      margin-bottom: 15px;
      border-radius: 10px;
   }

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

export type PlayListData = {
   description: string;
   image_url: string;
   name: string;
   playlist_id: number;
};

type PlaylistCardProps = {
   data: PlayListData;
};

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ data }) => {

   const [playlistSlug, setPlaylistSlug] = useState<string>();

   const { state, dispatch } = usePlayback();

   useEffect(() => {

      const slug = formatSlug(data.name);

      setPlaylistSlug(slug);

   }, [data]);

   const handleClick = async (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {

      const playlistDetails = await getResource<playlistContextData>(`playlist_tracks/${data.playlist_id}`);

      const playlistContextData = {
         id: data.playlist_id,
         tracks: playlistDetails.tracks,
         image: data.image_url
      };

      const playlistFirstTrack = playlistContextData.tracks[0];

      const songContextData = {
         artist: playlistFirstTrack.artists_names,
         id: playlistFirstTrack.track_id,
         duration: playlistFirstTrack.duration,
         name: playlistFirstTrack.name
      };

      dispatch({ type: 'SET_PLAYLIST', playlist: playlistContextData });
      dispatch({ type: 'SET_SONG', song: songContextData });

      notifySongApi(playlistContextData.id, songContextData.id);

      if (!state?.playing) dispatch({ type: 'PLAY' });

   }

   return (
      <Card>
         <img onClick={handleClick} alt={`${data.name} playlist cover`} src={data.image_url} />
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