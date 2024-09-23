import React from 'react'

import './inputComponent.css';

const InputComponent = ({type,placeholder,value, onChangeMethod,min}) => {
  return (
   
    <div>
    <input type={type} 
    className='input-style' 
    placeholder={placeholder} 
    onChange={onChangeMethod}
    value={value || ""}
    min={min || 0} 
    />
   
</div>
  )
}

export default InputComponent