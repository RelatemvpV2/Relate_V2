import React from 'react';
import './greybackground.css'; // Import the CSS file

const GreyBackground = ({ children }) => {
  return (
    <div className="grey-background">
      {children}
    </div>
  );
};

export default GreyBackground;