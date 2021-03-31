import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sprinttLogo from '../assets/images/sprintt_logo.png';
import homeIcon from '../assets/images/ui_icons/home_icon.png';
import browseIcon from '../assets/images/ui_icons/browse_icon.png';
import LikedIcon from '../assets/images/ui_icons/liked_songs_icon.png';
import { NavItem } from './NavItem';

export const NavBar: React.FC = () => {

   return (
      <NavBarStyled>
         <LogoContainer>
            <Link to="/">
               <img alt="spotify logo" src={sprinttLogo} />
            </Link>
         </LogoContainer>
         <Nav>
            <NavItem exact={true} match={['/playlist/:playlistID', '/']} to='/' linkText='Home' iconAlt='home icon' icon={homeIcon} />
            <NavItem match={['/browse', '/genre/:genreID']} to='/browse' linkText='Browse' iconAlt='browse icon' icon={browseIcon} />
            <NavItem match={'/liked-songs'} to='/liked-songs' linkText='Liked Songs' iconAlt='Liked songs icon' icon={LikedIcon} />
         </Nav>
      </NavBarStyled>
   );

};

const NavBarStyled = styled.nav`

   grid-area: nav-bar;
   position: relative;
   padding: 50px 35px 10px 25px;

`;

const LogoContainer = styled.div`

   display: block;
   margin-bottom: 7px;
   padding-left: 20px;

   a{ display: inline-block; }

   img{ width: 100px; }

`;

const Nav = styled.ul`

   width: 100%;
   font-size: 1.8rem;
   font-weight: 300;

`;