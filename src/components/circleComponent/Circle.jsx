import React from 'react'

const Circle = ({ diameter, bgColor, color, optionVal }) => {
  return (
    <div style={{ height: `${diameter}`, width: `${diameter}`, borderRadius: "50%", backgroundColor: `${bgColor}`, color: `${color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span>{optionVal}</span>
    </div>
  )
}

export default Circle