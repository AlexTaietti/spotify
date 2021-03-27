import playIcon from '../assets/images/ui_icons/play_line_icon.png';
import pauseIcon from '../assets/images/ui_icons/pause_line_icon.png';

export const PlaystateIcon: React.FC<{ visible: boolean, playing?: boolean, handleAudio: () => void }> = ({ visible, playing, handleAudio }) => {

   return <td className={visible ? 'show' : 'hidden'} onClick={handleAudio}><img alt='heart icon' src={playing ? pauseIcon : playIcon} /></td>;

}