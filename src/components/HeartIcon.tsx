import notLikedIcon from '../assets/images/ui_icons/not_liked.png';
import likedIcon from '../assets/images/ui_icons/liked.png';
import React from 'react';

export const HeartIcon: React.FC<{ liked?: boolean, handleLike: (event: React.MouseEvent) => void }> = ({ liked, handleLike }) => {

   return <td><img onClick={handleLike} alt='heart icon' src={liked ? likedIcon : notLikedIcon} /></td>;

}