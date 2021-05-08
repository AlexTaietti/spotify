import React, { useState } from 'react';
import styled from 'styled-components';
import { Spoofify } from '../Spoofify';
import logo from '../assets/images/sprintt_logo.png';
import showcase from '../assets/images/spoofify_showcase.png';

export const MobileRedirect: React.FC = ({ children }) => {

   const [desktop] = useState(window.innerWidth >= 1280);

   return (

      desktop ?

         <Spoofify />

         :

         <MobileRedirectPanel>
            <img src={logo} alt='sprintt logo' />
            <h1>Please open the app from a desktop computer</h1>
            <img className='showcase' src={showcase} alt='app showcase' />
         </MobileRedirectPanel>

   );

};

const MobileRedirectPanel = styled.div`

   position: fixed;
   height: 100%;
   width: 100%;
   background: #201a1a;
   padding: 10%;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   font-family: 'Rubik', sans-serif;
   align-items: center;
   justify-content: center;
   font-size: 1.2rem;
   
   img:first-of-type{
      width: 120px;
      margin-bottom: 10px;
   }

   h1{
      font-weight: lighter;
      margin-bottom: 30px;
      color: white;
      text-align: center;
      letter-spacing: -.6px;
   }

   img:last-of-type{
      width: 70%;
   }

   @media screen and (max-width: 1000px){
      
      h1{
         font-size: 2rem;
         margin-bottom: 20px;
      }

      img:last-of-type{ width: 80%; }

   }

   @media screen and (max-width: 600px){

      img:first-of-type{
         width: 100px;
         margin-bottom: 5px;
      }

      h1{ font-size: 1.6rem; }

      img:last-of-type{ width: 90%; }

   }

`;