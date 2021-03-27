import styled from 'styled-components';

const AlbumDataContainer = styled.div`

   height: 100%;
   display: flex;
   position: absolute;
   left: 0;
   top: 0;

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
      max-width: 160px;
      padding: 0 20px;

      span{
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
      }
      
      span:first-of-type{
         font-weight: 400;
         font-size: 1.6rem;
         margin-bottom: 8px;
      }

      span:last-of-type{
         font-weight: 300;
         font-size: 1.4rem;
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

      <AlbumDataContainer>
         <img alt='playlist thumbnail' src={image} />
         <div>
            <span>{song}</span>
            <span>{artist}</span>
         </div>
      </AlbumDataContainer>

   );

};