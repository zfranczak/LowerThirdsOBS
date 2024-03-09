import React, { useState } from 'react';
import Titles from './buttons/Titles';
import Button from './buttons/Button';
import './controls.css';
import LowerThirds from './LowerThirds';
import { RxFontSize } from 'react-icons/rx';
import { RxSize } from 'react-icons/rx';

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
      <h1>Lower Thirds for OBS</h1>
      <Titles
        textSize={textSize}
        textPadding={textPadding}
        displayText={displayText}
        // Pass the functions to update title and subtitle
        handleTitleChange={handleTitleChange}
        handleSubtitleChange={handleSubtitleChange}
      />
      <div className='row-1'>
        <Button IconComponent={RxFontSize} />
        <Button IconComponent={RxSize} />
        <Button IconComponent={RxSize} />
        <Button IconComponent={RxSize} />
      </div>
      <LowerThirds title={title} subtitle={subtitle} />
    </>
  );
}

export default Controls;
