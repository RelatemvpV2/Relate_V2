import React from "react";
import logo from "../../assets/logo.png"; 
import './relatelogo.css'

const RelateLogo = (props) => {
  const className = props.className;

  return (
    <img
      src={logo}
      className={`${className}`}
      alt="Relate Logo"
     
    />
  );
};



export default RelateLogo;
