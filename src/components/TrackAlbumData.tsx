import styled from 'styled-components';

const AlbumDataContainer = styled.div`

   height: 100%;
   display: flex;

   img{
      display: inline-block;
      height: 100%;
      width: 100px;
   }

   div{

      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding: 20px 30px;
      
      span:first-of-type{
         font-weight: 400;
         font-size: 2.4rem;
         margin-bottom: 8px;
      }

      span:last-of-type{
         font-weight: 300;
         font-size: 1.8rem;
      }

   }

`;

type AlbumDataProps = {
   image?: string;
   song?: string;
   artist?: string;
}

export const AlbumData: React.FC<AlbumDataProps> = ({ image, song, artist }) => {

   return (

      (image && song && artist) ?

         <AlbumDataContainer>
            <img alt='playlist thumbnail' src={image} />
            <div>
               <span>{song}</span>
               <span>{artist}</span>
            </div>
         </AlbumDataContainer> : null

   );

};