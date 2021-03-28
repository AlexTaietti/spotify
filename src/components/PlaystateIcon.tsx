import playIcon from '../assets/images/ui_icons/play_line_icon.png';
import pauseIcon from '../assets/images/ui_icons/pause_line_icon.png';
import React from 'react';

export const PlaystateIcon: React.FC<{ visible: boolean, playing?: boolean, handleAudio: (event: React.MouseEvent) => void }> = ({ visible, playing, handleAudio }) => {

   return <td className={visible ? 'show' : 'hidden'} onClick={(event) => handleAudio(event)}><img alt='heart icon' src={playing ? pauseIcon : playIcon} /></td>;

}