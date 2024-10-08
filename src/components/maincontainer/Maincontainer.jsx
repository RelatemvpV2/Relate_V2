// MainContainer.js
import React from 'react';
import './maincontainer.css'; // Import the CSS file

const MainContainer = ({ children, style }) => {
  console.log(style)
  return (
    <div className="main-container" style={style}>
      {children}
    </div>
  );
};

export default MainContainer;
