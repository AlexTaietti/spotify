import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type NavItemProps = {
   linkText: string;
   icon: string;
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
      padding: 15px 20px;
      color: black;
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