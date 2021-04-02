import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { NavItemProps } from '../@types';

export const NavItem: React.FC<NavItemProps> = ({ match, linkText, to, IconComponent, exact = false }) => {

   const urlMatch = useRouteMatch({
      path: match,
      exact: exact
   });

   return (
      <Item>
         <Link className={urlMatch ? "active" : 'default'} to={to}>
            <IconComponent />
            <span>{linkText}</span>
         </Link>
      </Item>
   );

};

const Item = styled.li`

   padding: 2px;
   display: flex;

   a{
      display: flex;
      border-radius: 5px;
      padding: 15px 20px;
      color: var(--main-text);
      width: 100%;
      font-weight: lighter;
      align-items: center;

   }

   .active{ background: var(--active-nav-link-bg); }
   
`;