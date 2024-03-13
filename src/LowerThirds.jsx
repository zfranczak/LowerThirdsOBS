// LowerThirds.jsx
import React from 'react';
import './styles/lower-thirds.css';
import { useGlobalContext } from './GlobalContext.jsx'; // Import useGlobalContext hook

const LowerThirds = () => {
  const { title, subtitle } = useGlobalContext(); // Access title and subtitle from context

  return (
    <div className='container'>
      <div id='animation-1' className='animation'>
        <div className='mask'>
          <div id='title'>{title}</div>
        </div>
        <div className='mask'>
          <div id='subtitle'>{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default LowerThirds;
