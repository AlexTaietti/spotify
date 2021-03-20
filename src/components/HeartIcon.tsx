import notLikedIcon from '../assets/images/ui_icons/not_liked.png';
import likedIcon from '../assets/images/ui_icons/liked.png';

export const HeartIcon: React.FC<{ liked?: boolean }> = ({ liked }) => {

   return <td><img alt='heart icon' src={liked ? likedIcon : notLikedIcon} /></td>;

}