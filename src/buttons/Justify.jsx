import React, { useState } from 'react';
import '../styles/justify.css';
import {
  RxTextAlignLeft,
  RxTextAlignCenter,
  RxTextAlignRight,
} from 'react-icons/rx';

const Justify = ({ onChange }) => {
  const [justify, setJustify] = useState('left');

  const handleJustifyChange = (newJustify) => {
    setJustify(newJustify);
    onChange(newJustify); // Pass the updated justify value to the parent component
  };

  return (
    <div className='justify-block'>
      <div
        className='justify'
        title='Justify Left'
        onClick={() => handleJustifyChange('left')}
      >
        <div>
          <RxTextAlignLeft className='icon' />
        </div>
      </div>
      <div
        className='justify'
        title='Justify Center'
        onClick={() => handleJustifyChange('center')}
      >
        <div>
          <RxTextAlignCenter className='icon' />
        </div>
      </div>
      <div
        className='justify'
        title='Justify Right'
        onClick={() => handleJustifyChange('right')}
      >
        <div>
          <RxTextAlignRight className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Justify;
