import React from 'react';
import '../styles/titles.css';

const Titles = ({ handleTitleChange, handleSubtitleChange }) => {
  return (
    <div className='grid-container'>
      <div className='title-container'>
        <label>
          <input
            type='text'
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </label>
      </div>
      <div className='title-container'>
        <label>
          <input
            type='text'
            onChange={(e) => handleSubtitleChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Titles;
