import React from 'react';
import './greybackground.css'; // Import the CSS file

const GreyBackground = ({ children,style }) => {
  return (
    <div className="grey-background" style={style}>
      {children}
    </div>
  );
};

export default GreyBackground;