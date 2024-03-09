import React, { useState } from 'react';
import Titles from './buttons/Titles';
import Button from './buttons/Button';
import './controls.css';
import LowerThirds from './LowerThirds';

function Controls() {
  const [textSize, setTextSize] = useState(16);
  const [textPadding, setTextPadding] = useState(10);
  const [displayText, setDisplayText] = useState('Initial Text');
  const [title, setTitle] = useState(''); // Add state for title
  const [subtitle, setSubtitle] = useState(''); // Add state for subtitle

  const handleTextSize = () => {
    setTextSize((prevSize) => prevSize + 2);
  };

  const handleTextPadding = () => {
    setTextPadding((prevPadding) => prevPadding + 5);
  };

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
      <Button buttonText='Increase Text Size' updateText={handleTextSize} />
      <Button
        buttonText='Increase Text Padding'
        updateText={handleTextPadding}
      />
      <LowerThirds title={title} subtitle={subtitle} />
    </>
  );
}

export default Controls;
