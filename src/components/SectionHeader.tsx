import styled from 'styled-components';

export const SectionHeader: React.FC<PlaylistHeaderProps> = ({ imageUrl, name, description, songNumber, duration, itemsLabel = 'songs' }) => {

   return (
      <Header imageUrl={imageUrl}>
         <div className='info-container'>
            <h1>{name}</h1>
            {description && <h2>{description}</h2>}
         </div>
         <div className='info-container'>
            <h1>{songNumber} <span>{itemsLabel}</span></h1>
            {duration && <h2>{duration}</h2>}
         </div>
         <ContrastOverlay />
      </Header>
   );

};

type PlaylistHeaderProps = {
   imageUrl: string;
   name: string;
   description?: string;
   songNumber: number;
   duration?: string;
   itemsLabel?: string;
};

type StyledHeaderProps = {
   imageUrl: string;
};

const Header = styled.header`

   display: flex;
   position: sticky;
   top: 0;
   justify-content: space-between;
   align-items: start;
   height: 220px;
   width: 100%;
   background: url(${(props: StyledHeaderProps) => props.imageUrl});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   padding: 80px 100px 0;
   margin-bottom: 30px;
   z-index: 1;

   .info-container{

      color: #f1f1f1;
      z-index: 1;
      max-width: 65%;

      h1, h2{
         font-weight: normal;
         text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
      }

      h1{ font-size: 3.8rem; }

      h2{ font-size: 1.8rem; }

      &:nth-of-type(2){

         max-width: 35%;
         
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