import React from 'react'

import Circle from '../circleComponent/Circle'

const Option = ({ optionVal, text, bgColor, color }) => {
  return (

    <section style={{ display: "inline-flex", justifyContent: "flex-end", alignItems: "center"/* , marginBottom:"1rem" */ }}>
      <Circle bgColor={bgColor} color={color} optionVal={optionVal} diameter={"50px"} />
      <span style={{ width: "100px" }}>{text}</span>
    </section>
   
  )
}

export default Option