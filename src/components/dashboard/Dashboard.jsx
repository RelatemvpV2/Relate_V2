import React from 'react'

//components
import SideGreyBg from '../sidegreybg/SideGreyBg';
import UserDashboard from '../userDashboard/UserDashboard';
import DashboardLayout from '../dashboardLayout/DashboardLayout';

//css
import './dashboard.css'



const Dashboard = () => {
  return (
    
        <DashboardLayout>
            <UserDashboard/>
        </DashboardLayout>
    
  )
}

export default Dashboard