import React from 'react';
import styled from 'styled-components';
import magnifier from '../assets/images/ui_icons/magnifier.png';

const FilterInputWrapper = styled.div.attrs(props => ({ role: 'search' }))`

   width: 100%;
   display: flex;
   align-items: center;
   justify-content: start;
   margin-bottom: 30px;

   input{

      background: none;
      font-weight: 300;
      font-size: 1.8rem;

      &:focus{ outline: none; }
   }
   
   i{ margin-right: 15px; }

`;

export const Filter: React.FC<{ setFilter: React.Dispatch<React.SetStateAction<string>> }> = ({ setFilter }) => {

   const handleChange = (inputText: string) => setFilter(inputText);

   return (
      <FilterInputWrapper>
         <i><img alt='magnifier icon' src={magnifier} /></i>
         <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)} placeholder="Filter" type='text' aria-label="songs filter" />
      </FilterInputWrapper >
   );

};