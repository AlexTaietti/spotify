import React, { useState } from 'react';
import styled from 'styled-components';

type VariableBarProps = {
   value: number;
   width: string;
   callback?: (value: number) => void;
};

type BarProps = {
   width: string;
   value: number;
};

const Bar = styled.div`

   display: block;
   position: relative;
   border-radius: 11px;
   height: 6px;
   width: ${(props: BarProps) => props.width};
   background: #C4C4C4;
   cursor: pointer;

   &::after{
      content: '';
      background: #191414;
      border-radius: 11px;
      height: 100%;
      width: ${(props: BarProps) => props.value}%;
      position: absolute;
      top: 0;
      left: 0;
   }
   

`;

export const VariableBar: React.FC<VariableBarProps> = ({ value, width, callback }) => {

   const [displayedValue, setDisplayedValue] = useState(value);

   const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

      const clickOffset = event.clientX;
      const barOffset = (event.target as HTMLDivElement).offsetLeft;
      const barWidth = (event.target as HTMLDivElement).offsetWidth;

      const newValue = (clickOffset - barOffset) * 100 / barWidth;

      if (callback) callback(newValue);

      setDisplayedValue(newValue);

   };

   return <Bar onClick={handleClick} width={width} value={displayedValue} />;

};