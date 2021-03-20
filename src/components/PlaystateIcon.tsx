import playingIcon from '../assets/images/ui_icons/play_line_icon.png';
import pausedIcon from '../assets/images/ui_icons/pause_line_icon.png';

export const PlaystateIcon: React.FC<{ playing?: boolean }> = ({ playing }) => {

   return <td><img alt='heart icon' src={playing ? playingIcon : pausedIcon} /></td>;

}