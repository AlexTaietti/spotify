import playIcon from '../assets/images/ui_icons/play_line_icon.png';
import pauseIcon from '../assets/images/ui_icons/pause_line_icon.png';

export const PlaystateIcon: React.FC<{ visible: boolean, playing?: boolean, handlePlaystate: (event: React.MouseEvent) => void }> = ({ visible, playing, handlePlaystate }) => {

   return <td role="button" onClick={(event) => handlePlaystate(event)} className={visible ? 'show' : 'hidden'}><img alt='heart icon' src={playing ? pauseIcon : playIcon} /></td>;

}