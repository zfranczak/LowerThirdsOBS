import React from 'react';
import '../styles/titles.css';

const Titles = ({ handleTitleChange, handleSubtitleChange }) => {
  return (
    <div className='grid-container'>
      <div className='title-container' title='Title'>
        <label>
          <input
            type='text'
            placeholder='Title'
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </label>
      </div>
      <div className='title-container' title='Subtitle'>
        <label>
          <input
            type='text'
            placeholder='Subtitle'
            onChange={(e) => handleSubtitleChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Titles;
