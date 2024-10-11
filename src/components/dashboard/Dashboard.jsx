import React from 'react'

//components
import SideGreyBg from '../sidegreybg/SideGreyBg';
import UserDashboard from '../userDashboard/UserDashboard';

//css
import './dashboard.css'
import LightBgMain from '../lightBgMain/LightBgMain';

const Dashboard = () => {
  return (
    <div className='dashboard-layout'>
        <SideGreyBg/>
        <LightBgMain>
            <UserDashboard/>
        </LightBgMain>
    </div>
  )
}

export default Dashboard