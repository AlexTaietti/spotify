import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem: React.FC<NavItemProps> = ({ match, linkText, to, icon, iconAlt, exact = false }) => {

   const urlMatch = useRouteMatch({
      path: match,
      exact: exact
   });

   return (
      <Item>
         <Link className={urlMatch ? "active" : 'default'} to={to}>
            <i><img alt={iconAlt} src={icon} /></i>
            <span>{linkText}</span>
         </Link>
      </Item>
   );

};

type NavItemProps = {
   linkText: string;
   icon: string;
   iconAlt: string;
   to: string;
   exact?: boolean;
   match?: string | string[];
};

const Item = styled.li`

   padding: 2px;
   display: flex;

   a{
      display: flex;
      border-radius: 5px;
      padding: 15px 20px;
      color: #191414;
      width: 100%;
      font-weight: lighter;
      align-items: center;

      i{ margin-right: 15px; }

      img{
         display: block;
         height: 20px;
      }

   }

   .active{ background: rgb(221, 245, 229); }
   
`;