// src/components/Button.js
import React from 'react';
import './button.css'

const Button = ({ 
  className = '', 
  type = 'button',
  style={},
  onClick, 
  children, 
  disabled = false 
}) => {
  return (
    <button 
      className={className} 
      type={type} 
      onClick={onClick}
      disabled={disabled} 
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
