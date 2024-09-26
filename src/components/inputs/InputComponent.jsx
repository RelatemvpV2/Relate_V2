import React from 'react';
import './inputComponent.css';

const InputComponent = ({
  type = 'text', // Default type to 'text'
  placeholder = '', // Default placeholder
  value,
  onChange,
  min
}) => {
  return (
    <div>
      <input
        type={type}
        className='input-style'
        placeholder={placeholder}
        onChange={onChange}
        value={value || ""}
        {...(type === 'number' ? { min } : {})} // Apply min only if type is number
      />
    </div>
  );
};

export default InputComponent;
