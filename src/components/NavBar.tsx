import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import spotifyLogo from '../assets/spotify_logo.png';
import homeIcon from '../assets/home_icon.png';
import browseIcon from '../assets/browse_icon.png';
import LikedIcon from '../assets/liked_songs_icon.png';

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

const NavItem = styled.li`

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

export const NavBar: React.FC = () => {

   return (

      <NavBarStyled>
         <LogoContainer>
            <Link to="/">
               <img alt="spotify logo" src={spotifyLogo} />
            </Link>
         </LogoContainer>
         <Nav>
            <NavItem>
               <NavLink activeClassName="active" exact={true} to="/">
                  <i><img alt="home icon" src={homeIcon} /></i>
                  <span>Home</span>
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink activeClassName="active" to="/browse">
                  <i><img alt="browse icon" src={browseIcon} /></i>
                  <span>Browse</span>
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink activeClassName="active" to="/liked-songs">
                  <i><img alt="liked songs icon" src={LikedIcon} /></i>
                  <span>Liked Songs</span>
               </NavLink>
            </NavItem>
         </Nav>
      </NavBarStyled>

   );

}