import React from 'react'

//components
import Text from '../text/Text';
import CatagoryStatusTable from '../catagoryStatusTable/CatagoryStatusTable';

//css
import './userdashboard.css'
import Button from '../button/Button';

const UserDashboard = () => {
    return (
        <div>
            <Text type="h3" className='user-dashboard-heading h3' >My relation with</Text>
            <Text className='user-partnerName'>James Samuelson</Text>

            {/* Divider */}
            <div className="divider-horizantal"></div>

            <Text type="p" className="text">Waiting for your relation to complete questionnaire. Soon you’ll be able to follow your progress.</Text>

            <Button className='loginpage-button'>Send a reminder</Button>

            {/* Divider */}
            <div className="divider-horizantal"></div>

            <p>graphs integration</p>
            <div className='graph-section'>

            </div>


             {/* Table */}

             <CatagoryStatusTable></CatagoryStatusTable>



          


        </div>
    )
}

export default UserDashboard