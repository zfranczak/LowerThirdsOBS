import React from 'react';
import { useGlobalContext } from '../GlobalContext';
import '../styles/titles.css';

const Titles = () => {
  const { updateTitle, updateSubtitle } = useGlobalContext();

  return (
    <div className='grid-container'>
      <div className='title-container' title='Title'>
        <label>
          <input
            type='text'
            placeholder='Title'
            onChange={(e) => updateTitle(e.target.value)}
          />
        </label>
      </div>
      <div className='title-container' title='Subtitle'>
        <label>
          <input
            type='text'
            placeholder='Subtitle'
            onChange={(e) => updateSubtitle(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Titles;
