import styled from 'styled-components';
import magnifier from '../assets/images/ui_icons/magnifier.png';

export const Filter: React.FC<{ setFilter: React.Dispatch<React.SetStateAction<string>> }> = ({ setFilter }) => {

   const handleChange = (inputText: string) => setFilter(inputText);

   return (
      <FilterInputWrapper role='search'>
         <i><img alt='magnifier icon' src={magnifier} /></i>
         <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)} placeholder="Filter" type='text' aria-label="songs filter" />
      </FilterInputWrapper >
   );

};

const FilterInputWrapper = styled.div`

   width: 100%;
   display: flex;
   align-items: center;
   justify-content: start;
   margin-bottom: 30px;

   input{

      color: var(--main-text);
      background: none;
      font-weight: 300;
      font-size: 1.8rem;

      &:focus{ outline: none; }
   }
   
   i{ margin-right: 15px; }

`;