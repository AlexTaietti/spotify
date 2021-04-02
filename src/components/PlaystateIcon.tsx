import { PlayIcon } from './TablePlayIcon';
import { PauseIcon } from './TablePauseIcon';

export const PlaystateIcon: React.FC<{ visible: boolean, playing?: boolean, handlePlaystate: (event: React.MouseEvent) => void }> = ({ visible, playing, handlePlaystate }) => {

   return <td role="button" onClick={(event) => handlePlaystate(event)} className={visible ? 'show' : 'hidden'}>{playing ? <PauseIcon /> : <PlayIcon />}</td>;

};