import React from 'react'

//components
import Text from '../text/Text'
import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Button from '../button/Button'

//css
import './WaitingForPartnerResponse1.css'

const WaitingForPartnerResponse1 = () => {
    return (
        <DashboardLayout>
            <div style={{marginTop:"120px"}}>
                <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
                <Text className='questionaire-partnerName'><em>Waiting for relation</em></Text>


                {/* Divider */}
                <div className="divider-horizantal"></div>

                <Text type="p" className="text questionaire-relation-review">Relation review</Text>
                <Text type="p" className="ComparedAnswers-Text" >Compared answers</Text>


                {/* Divider */}
                <div className="divider-horizantal"></div>

                <div className="invite-partner-container" >
                    <div className="sub-containerheading">
                        {/*  Text component for h2 */}
                        <Text type="h2" className="sub-containereadingtext">
                            Waiting for relation to answer
                        </Text>
                    </div>

                    <div className="subcontainer-text">
                        {/*  Text component for p */}
                        <Text type="p" className="text" style={{maxWidth:"600px",margin:"auto"}}>
                            <span style={{fontSize:"14px"}}>otherusersemail@mail.com</span>
                            <br/>
                            ...have received your invitation and as soon as the questions have been answered you will be able to see a comparison
                        </Text>
                    </div>


                    <div className="userpage-buttoncontainer" style={{ marginTop: "30px" }}>
                        <Button className="userpage-button" type="submit">
                            Take me to the Dashboard
                        </Button>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}

export default WaitingForPartnerResponse1