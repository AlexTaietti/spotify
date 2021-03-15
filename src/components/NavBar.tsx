import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import spotifyLogo from '../assets/images/spotify_logo.png';
import homeIcon from '../assets/images/ui_icons/home_icon.png';
import browseIcon from '../assets/images/ui_icons/browse_icon.png';
import LikedIcon from '../assets/images/ui_icons/liked_songs_icon.png';

import { NavItem } from './NavItem';

const NavBarStyled = styled.div`

   grid-area: nav-bar;
   position: relative;
   padding: 50px 35px 10px 25px;

`;

const LogoContainer = styled.div`

   display: block;
   margin-bottom: 25px;
   padding-left: 10px;

   a{ display: inline-block; }

   img{ width: 130px; }

`;

const Nav = styled.ul`

   width: 100%;
   font-size: 18px;
   font-weight: 300;

`;

export const NavBar: React.FC = () => {

   return (

      <NavBarStyled>
         <LogoContainer>
            <Link to="/">
               <img alt="spotify logo" src={spotifyLogo} />
            </Link>
         </LogoContainer>
         <Nav>
            <NavItem to='/' exact={true} linkText='Home' iconAlt='home icon' icon={homeIcon} />
            <NavItem to='/browse' linkText='Browse' iconAlt='browse icon' icon={browseIcon} />
            <NavItem to='/liked-songs' linkText='Liked Songs' iconAlt='Liked songs icon' icon={LikedIcon} />
         </Nav>
      </NavBarStyled>

   );

}