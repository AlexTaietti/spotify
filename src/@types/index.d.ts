////////////////
// type utils //
///////////////
type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];


///////////////////////////
// object specific types //
///////////////////////////
export type GenreData = {
   category_id: number;
   category_name: string;
   image_url: string;
};

export type PlayListData = {
   description: string;
   image_url: string;
   name: string;
   playlist_id: number;
};

export type SongData = {
   album_name: string;
   artists_names: string;
   duration: number;
   is_liked: boolean;
   name: string;
   release_date: string;
   track_id: number;
};

export type SongFilterableProp = KeysMatching<SongData, string>;

export type PlaylistMetaData = {
   id: number;
   image: string;
   name: string;
   description?: string;
   duration?: string;
   songsNumber: number;
};


//////////////////////////
// component prop types //
//////////////////////////
export type PlaylistHeaderProps = {
   imageUrl: string;
   name: string;
   description?: string;
   songNumber: number;
   duration?: string;
   itemsLabel?: string;
};

export type SongRowProps = {
   song: SongData;
   updateSong: (song: SongData) => void;
};

export type SongsProps = {
   songs: Array<SongData>;
   updateSong: (song: SongData) => void;
};

export type CarouselProps = {
   title: string;
   data: Array<PlayListData>;
};

export type CardProps = {
   name: string;
   image: string;
};

export type PlaylistTracksProps = {
   onEmpty?: string;
   headerData: PlaylistMetaData;
   tracks: Array<SongData>;
};

export type NavItemProps = {
   linkText: string;
   SVGIconComponent: React.FC;
   to: string;
   exact?: boolean;
   match?: string | Array<string>;
};


///////////////////
// routing types //
///////////////////
export type GenresLocationState = {
   image: string;
   name: string;
   id: number;
};

export type PlaylistLocationState = {
   id: number;
   image: string;
   name: string;
   description: string;
};


////////////////////////
// global state types //
////////////////////////
export type playlistContextData = {
   id: number;
   tracks: Array<SongData>;
   image: string;
};

export type Action = { type: 'SET_PLAYLIST', playlist: playlistContextData } | { type: 'SET_DISPLAY_TRACKS', tracks: Array<SongData> | undefined } | { type: 'SET_SONG', song: SongData } | { type: 'PAUSE' } | { type: 'PLAY' };

export type PlaybackState = {
   playlist?: playlistContextData;
   displayTracks?: Array<SongData>;
   song?: SongData;
   playing?: boolean;
   lastSong?: number;
   lastPlaylist?: number;
};


///////////////////////////////
// track data/controls props //
///////////////////////////////
export type BarProps = {
   width: string;
   value: number;
};

export type VolumeProps = {
   volume: number;
   setVolume: React.Dispatch<React.SetStateAction<number>>;
};

export type VariableBarProps = {
   value: number;
   width: string;
   callback?: (value: number) => any | React.Dispatch<React.SetStateAction<number>>;
};

export type TrackControlsProps = {
   time?: number;
   duration?: number;
   handleClick: (value: number) => void;
   playing?: boolean;
};

export type AlbumDataProps = {
   displayTracks?: SongData[];
   playlist: playlistContextData;
   song: SongData;
};


///////////////
// api types //
///////////////
export type ApiResponse<T> = {
   response: T | undefined;
   error: boolean;
};

export type PlaylistInfoObject = {
   playlist_duration: string;
   playlist_tracks: number;
   tracks: Array<SongData>;
};