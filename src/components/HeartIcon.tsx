import notLikedIcon from '../assets/images/ui_icons/not_liked.png';
import likedIcon from '../assets/images/ui_icons/liked.png';
import styled from 'styled-components';

const IconContainer = styled.td`

   img{
      width: 25px;
      height: 25px;
      cursor: pointer;
   }

`;

export const HeartIcon: React.FC<{ liked?: boolean }> = ({ liked }) => {

   return <IconContainer><img alt='heart icon' src={liked ? likedIcon : notLikedIcon} /></IconContainer>;

}