import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type NavItemProps = {
   linkText: string;
   icon: any;
   iconAlt: string;
   to: string;
   exact?: boolean;
}

const Item = styled.li`

   padding: 2px;
   display: flex;

   a{
      display: flex;
      border-radius: 5px;
      padding: 10px;
      color: black;
      width: 100%;
      font-weight: lighter;
      letter-spacing: -1px;
      align-items: center;

      i{ margin-right: 12px; }

      img{
         display: block;
         height: 18px;
      }

   }

   .active{ background: rgb(221, 245, 229); }
   
`;

export const NavItem: React.FC<NavItemProps> = ({ linkText, to, icon, iconAlt, exact = false }) => {

   return (
      <Item>
         <NavLink activeClassName="active" exact={exact} to={to}>
            <i><img alt={iconAlt} src={icon} /></i>
            <span>{linkText}</span>
         </NavLink>
      </Item>

   )

};