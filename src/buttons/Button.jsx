import React, { useState } from 'react';

const Button = ({ initialValue, onIncrement, onDecrement }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
    onIncrement(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
      onDecrement(value - 1);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
  };

  return (
    <div className='increment-decrement-input-button'>
      <button onClick={handleDecrement} className='decrement-button'></button>
      <input
        className='input-field'
        type='number'
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleIncrement} className='increment-button'></button>
    </div>
  );
};

export default Button;
