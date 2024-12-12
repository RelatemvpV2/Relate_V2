import React from 'react'

import QuesionairModule from '../questionaireModule/QuesionairModule'

import './lightBgMain.css'

const LightBgMain = ({ children }) => {

  return (
    <div className='lightBgMain' style={{ flexGrow: 10 }}>
      {children}
    </div>
  )
}

export default LightBgMain