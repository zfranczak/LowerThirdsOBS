import React, { useState } from 'react';
import Titles from './buttons/Titles';
import Button from './buttons/Button';
import './controls.css';
import LowerThirds from './LowerThirds';
import Justify from './buttons/Justify';

{
  /*Icons*/
}

import {
  RxFontSize,
  RxSize,
  RxCornerTopLeft,
  RxRowSpacing,
  RxShadow,
  RxBorderWidth,
  RxAspectRatio,
  RxMoon,
} from 'react-icons/rx';

function Controls() {
  const [textSize, setTextSize] = useState(16);
  const [textPadding, setTextPadding] = useState(10);
  const [displayText, setDisplayText] = useState('Initial Text');
  const [title, setTitle] = useState(''); // Add state for title
  const [subtitle, setSubtitle] = useState(''); // Add state for subtitle

  // Function to handle title change
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  // Function to handle subtitle change
  const handleSubtitleChange = (newSubtitle) => {
    setSubtitle(newSubtitle);
  };

  return (
    <>
      <div className='controls-container'>
        <h2>Lower Thirds for OBS</h2>

        <div className='row row-1'>
          <Button IconComponent={RxSize} tooltip='Size for Lower Third' />
          <Button
            IconComponent={RxFontSize}
            tooltip='Ratio between text sizes'
          />
          <Button IconComponent={RxRowSpacing} tooltip='Space Between Text' />
          <Button IconComponent={RxShadow} tooltip='Shadows' />
        </div>
        <div className='row row-2'>
          <Button IconComponent={RxCornerTopLeft} tooltip='Rounded Corners' />
          <Button IconComponent={RxBorderWidth} tooltip='Border Thickness' />
          <Button IconComponent={RxAspectRatio} tooltip='Logo Size' />
          <Button IconComponent={RxMoon} tooltip='Lower Thirds Style' />
        </div>
        <div className='row row-3'>
          <Justify />
        </div>
        <Titles
          textSize={textSize}
          textPadding={textPadding}
          displayText={displayText}
          // Pass the functions to update title and subtitle
          handleTitleChange={handleTitleChange}
          handleSubtitleChange={handleSubtitleChange}
        />
      </div>
      <LowerThirds title={title} subtitle={subtitle} />
    </>
  );
}

export default Controls;
