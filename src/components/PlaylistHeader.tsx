import styled from 'styled-components';

type StyledHeaderProps = {
   imageUrl: string;
}

const Header = styled.div`

   display: flex;
   position: sticky;
   top: 0;
   justify-content: space-between;
   align-items: center;
   height: 220px;
   width: 100%;
   background: url(${(props: StyledHeaderProps) => props.imageUrl});
   background-repeat: no-repeat;
   background-size: cover;
   padding: 0 100px;
   margin-bottom: 30px;
   z-index: 1;

   .info-container{

      padding-top: 15px;
      color: #f1f1f1;
      z-index: 1;
      max-width: 50%;

      h1, h2{
         font-weight: normal;
         text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
      }

      h1{ font-size: 3.8rem; }

      h2{ font-size: 1.8rem; }

      &:nth-of-type(2){
         
         h1{
            
            font-weight: 300;
            white-space: nowrap;

            & span{ font-size: 2.7rem; }
         
         }

      }

   }

`;

const ContrastOverlay = styled.div`

   height: 100%;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, .6);
   z-index: 0;

`;

type PlaylistHeaderProps = {
   imageUrl: string;
   name: string;
   description: string;
   songNumber: number;
   duration: string;
}

export const PlaylistHeader: React.FC<PlaylistHeaderProps> = ({ imageUrl, name, description, songNumber, duration }) => {

   return (

      <Header imageUrl={imageUrl}>
         <div className='info-container'>
            <h1>{name}</h1>
            <h2>{description}</h2>
         </div>
         <div className='info-container'>
            <h1>{songNumber} <span>songs</span></h1>
            <h2>{duration}</h2>
         </div>
         <ContrastOverlay />
      </Header>
   )

};