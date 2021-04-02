import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sprinttLogo from '../assets/images/sprintt_logo.png';
import { NavItem } from './NavItem';
import { HomeIcon } from './HomeIcon';
import { BrowseIcon } from './BrowseIcon';
import { HeartIcon } from './NavigationHeartIcon';


export const NavBar: React.FC = () => {

   return (
      <NavBarStyled>
         <LogoContainer>
            <Link to="/">
               <img alt="spotify logo" src={sprinttLogo} />
            </Link>
         </LogoContainer>
         <Nav>
            <NavItem exact={true} match={['/playlist/:playlistID', '/']} to='/' linkText='Home' IconComponent={HomeIcon} />
            <NavItem match={['/browse', '/genre/:genreID']} to='/browse' linkText='Browse' IconComponent={BrowseIcon} />
            <NavItem match={'/liked-songs'} to='/liked-songs' linkText='Liked Songs' IconComponent={HeartIcon} />
         </Nav>
      </NavBarStyled>
   );

};

const NavBarStyled = styled.nav`

   grid-area: nav-bar;
   position: relative;
   padding: 50px 35px 10px 25px;
   background: var(--nav-container-bg);

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