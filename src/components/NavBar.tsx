import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import browseIcon from '../assets/browse_icon.png';
import homeIcon from '../assets/home_icon.png';
import LikedIcon from '../assets/liked_songs_icon.png';
import { NavItem } from './NavItem';
import spotifyLogo from '../assets/spotify_logo.png';

const NavBarStyled = styled.div`

   grid-area: nav-bar;
   position: relative;
   padding: 20px 10px 10px;
   border: 1px dotted;

`;

const LogoContainer = styled.div`

   width: 100%;
   display: block;
   margin-bottom: 10px;

   a{
      display: inline-block;
      width: 40%;
   }

   img{ width: 100%; }

`;

const Nav = styled.ul`
   width: 100%;

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