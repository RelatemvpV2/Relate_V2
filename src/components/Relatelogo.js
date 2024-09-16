import React from "react";
import logo from "../assets/logo.png"; // Ensure the path to your logo is correct

const RelateLogo = () => {
  return (
    <img
      src={logo}
      alt="Relate Logo"
      style={{
        marginLeft: "-75%",
        width: "148px",
        height: "auto",
        flexShrink: 0, // No semicolon, and camelCase for CSS properties
      }}
    />
  );
};

export default RelateLogo;
