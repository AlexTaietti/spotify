import playIcon from '../assets/images/ui_icons/play_line_icon.png';
import pauseIcon from '../assets/images/ui_icons/pause_line_icon.png';

export const PlaystateIcon: React.FC<{ playing?: boolean, handleAudio: () => void }> = ({ playing, handleAudio }) => {

   return <td onClick={handleAudio}><img alt='heart icon' src={playing ? pauseIcon : playIcon} /></td>;

}