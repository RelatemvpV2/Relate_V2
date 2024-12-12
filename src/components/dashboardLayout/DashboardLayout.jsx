import React from 'react'

//components
import SideGreyBg from '../sidegreybg/SideGreyBg'
import LightBgMain from '../lightBgMain/LightBgMain'
import SideBar from '../sideBar/SideBar'

//css 

import './dashboardLayout.css'

const DashboardLayout = ({children, style}) => {
  return (
    <div className='dashboard-layout' style={style}>

        <SideGreyBg></SideGreyBg>
        {/* <SideBar></SideBar> */}
        <LightBgMain>
            {children}
        </LightBgMain>
    </div>
  )
}

export default DashboardLayout