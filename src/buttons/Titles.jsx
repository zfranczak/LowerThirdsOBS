import React, { useState } from 'react';
import '../styles/titles.css';

const Titles = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setSubtitle(e.target.value);
  };

  return (
    <div className='grid-container'>
      <div className='title-container'>
        <label>
          Title:
          <input type='text' value={title} onChange={handleTitleChange} />
        </label>
      </div>
      <div className='title-container'>
        <label>
          Subtitle:
          <input type='text' value={subtitle} onChange={handleSubtitleChange} />
        </label>
      </div>
    </div>
  );
};

export default Titles;
