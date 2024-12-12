import React from 'react';
import './inputComponent.css';

const InputComponent = ({
  type = 'text', // Default type to 'text'
  placeholder = '', // Default placeholder
  value,
  onChange,
  min,
  className = '', // Accept custom class name
}) => {
  return (
    <div>
      <input
        type={type}
        className={className} // Use only the provided className
        placeholder={placeholder}
        onChange={onChange}
        value={value || ''}
        {...(type === 'number' ? { min } : {})} // Apply min only if type is number
      />
    </div>
  );
};

export default InputComponent;
