import React, { useState } from 'react';
import '../styles/buttons.css';

const Button = ({ IconComponent, initialValue, tooltip }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
  };

  return (
    <div className='increment-decrement-input-button' title={tooltip}>
      <div>{IconComponent && <IconComponent className='icon' />}</div>
      <input
        className='input-field'
        type='number'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Button;
