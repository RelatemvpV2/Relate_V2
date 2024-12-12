import React from 'react';
import './text.css'

const Text = ({ 
  children, 
  type = 'p', // Default to paragraph
  className = '', 
  style = {}, 
  ...rest 
}) => {
  const Tag = type; // Dynamically set the HTML tag based on `type` prop

  return (
    <Tag className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
};

export default Text;
