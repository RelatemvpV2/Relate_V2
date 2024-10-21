import React from 'react'

import "./catagory.css"

const Catagory = ({children,width}) => {
  return (
    <div className='catagory' style={{width:`${width}`}}>{children}</div>
  )
}

export default Catagory