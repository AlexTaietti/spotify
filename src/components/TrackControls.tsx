import React from "react";
import styled from 'styled-components';
import { BackIcon } from './BackIcon';
import { NextIcon } from './NextIcon';
//import { PauseIcon } from './PauseIcon'; not needed for now...
import { PlayIcon } from './PlayIcon';
import { VariableBar } from './VariableBar';

const ControlsContainer = styled.div`

   display: inline-flex;
   flex-direction: column;
   width: 60%;
   min-width: 40%;
   height: 100%;
   align-items: center;
   padding: 30px 0 15px;

`;

const Controls = styled.div`

   display: flex;
   align-items: center;
   height: 22px;
   margin-bottom: 10px;
   
   i{

      height: 100%;
      cursor: pointer;

      svg{ height: 100%; }

   }

   path{
      transition-property: stroke, fill;
      transition-duration: .3s;
   }

`;

const Progress = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;

   span{

      display: inline-block;
      color: #191414;
      font-size: 1.8rem;
      font-weight: 400;

      &:first-of-type{ margin-right: 12px; }

      &:last-of-type{ margin-left: 12px; }

   }

`;

type TrackControlsProps = {

   progress: {
      elapsed: string;
      duration: string;
   }

};

export const TrackControls: React.FC<TrackControlsProps> = ({ progress }) => {

   return (
      <ControlsContainer>
         <Controls>
            <BackIcon />
            <PlayIcon />
            <NextIcon />
         </Controls>
         <Progress>
            <span>{progress.elapsed}</span>
            <VariableBar width='70%' value={45} />
            <span>{progress.duration}</span>
         </Progress>
      </ControlsContainer>
   );

};