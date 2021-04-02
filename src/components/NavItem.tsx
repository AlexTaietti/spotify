import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { NavItemProps } from '../@types';

export const NavItem: React.FC<NavItemProps> = ({ match, linkText, to, SVGIconComponent, exact = false }) => {

   const urlMatch = useRouteMatch({
      path: match,
      exact: exact
   });

   return (
      <Item>
         <Link className={urlMatch ? "active" : 'default'} to={to}>
            <SVGIconComponent />
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
      color: #191414;
      width: 100%;
      font-weight: lighter;
      align-items: center;

      i{
         margin-right: 15px;
         height: 18px;
         width: 18px;

         svg{
            * { stroke: var(--big-text); }
         }

      }

      img{
         display: block;
         height: 20px;
      }

   }

   .active{ background: rgb(221, 245, 229); }
   
`;