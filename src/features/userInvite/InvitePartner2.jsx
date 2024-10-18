import React from 'react'

import Text from '../../components/text/Text'
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout'
import Button from '../../components/button/Button'

const InvitePartner2 = () => {

  return (
 
         <DashboardLayout>
            <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
            <Text className='questionaire-partnerName '>James Samuelson</Text>

            {/* Divider */}
            <div className="divider-horizantal"></div>

            <Text type="p" className="text questionaire-relation-review">Relation review</Text>
            <Text type="p" className="text">Compared answers</Text>


            {/* Divider */}
            <div className="divider-horizantal"></div>

        <div className="invite-partner-container" >
            <div className="sub-containerheading">
                {/*  Text component for h2 */}
                <Text type="h2" className="sub-containereadingtext">
                    Invite your partner
                </Text>
            </div>

            <div className="subcontainer-text">
                {/*  Text component for p */}
                <Text type="p" className="text">
                To be able to help you in the best way, your partner will have to answer the same questionnaire. Please proceed by inviting your partner below
                </Text>
            </div>

            <div className="invitePartner-container">
                {/*  Text component for label */}
                <Text type="label" htmlFor="email" className="labels">
                    Email
                </Text>
                <input
                    id="email"
                    type="email"
                    name="partnerEmail"
                    className="inviteuser-inputbox indent"
                    value={"value"}
                    onChange={()=>{}}
                    
                />
            </div>
            <div className="userpage-buttoncontainer"  style={{marginTop:"30px"}}>
              <Button className="userpage-button" type="submit">
                Send invitation
              </Button>
            </div>
        </div>       

        </DashboardLayout>

  )
}

export default InvitePartner2