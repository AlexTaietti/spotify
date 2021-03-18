import { SongData } from './PlaylistView';

type SongsProps = {
   songs: Array<SongData>;
}

export const Songs: React.FC<SongsProps> = ({ songs }) => {

   return <pre>{JSON.stringify(songs, null, 4)}</pre>;

};