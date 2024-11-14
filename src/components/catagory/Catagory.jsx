import React from 'react'

import "./catagory.css"

const Catagory = ({children,className}) => {
  return (
    <div className={className} >{children}</div>
  )
}

export default Catagory