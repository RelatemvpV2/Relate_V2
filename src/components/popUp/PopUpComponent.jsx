import React from 'react'
import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Button from '../button/Button'
import Text from '../text/Text'
//css
import './popupcomponent.css'
const PopUpComponent = () => {
    return (
        <div>

            <DashboardLayout style={{height:"100vh"}}>
                <div className='popup-container'>
                    <Text type="h3">You’ve been invited</Text>
                    <Text className="invitedByemail">otherusersemail@mail.com </Text>
                    <Text>
                        ...has invited you to join relate and answer a questionnaire to strengthen your relationship.</Text>
                    <section className='button-section'>
                        <Button className='loginpage-button acccept'>Accept</Button>
                        <Button className='loginpage-button reject'>Reject</Button>
                    </section>
                </div>
            </DashboardLayout>
        </div>
    )
}

export default PopUpComponent