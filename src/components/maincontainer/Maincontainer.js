// MainContainer.js
import React from 'react';
import './maincontainer.css'; // Import the CSS file

const MainContainer = ({ children }) => {
  return (
    <div className="main-container">
      {children}
    </div>
  );
};

export default MainContainer;
