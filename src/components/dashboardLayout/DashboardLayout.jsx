import React from 'react'

//components
import SideGreyBg from '../sidegreybg/SideGreyBg'
import LightBgMain from '../lightBgMain/LightBgMain'

//css 

import './dashboardLayout.css'

const DashboardLayout = ({children}) => {
  return (
    <div className='dashboard-layout'>

        <SideGreyBg></SideGreyBg>
        <LightBgMain>
            {children}
        </LightBgMain>
    </div>
  )
}

export default DashboardLayout