





import React, { useState, useEffect } from 'react'

import Text from '../text/Text'
import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Button from '../button/Button'
import { getPartnerEmail } from '../../services/api/userAuthApi'

//css
import './receiveInvite.css'


const email = window.localStorage.getItem("email");

const ReceiveInvite = () => {
    const [messages, setMessages] = useState([])
    const [newInvite, setNewInvite] = useState(true)
    const [activeBtnId, setActiveBtnId] = useState(null)
    const [subjectOpen, setSubjectOpen] = useState(false)
    

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await getPartnerEmail()
                console.log("API response:", response.data);
                // response.data.filter(user => user.partner_email == sessionStorage.get('user-email'))
                setMessages(response.data)
            } catch (error) {
                console.error("Error fetching messages:", error)
            }
        }
        fetchMessages()
    }, [])

    const handleButtonClick = (id) => {
        console.log(id)
        setActiveBtnId(id)
        setSubjectOpen(!subjectOpen)
    }

    return (
        <DashboardLayout>
            <div className='messages-header'>
                <Text type="h3">Messages</Text>
                <Text type="p">Below you’ll find. Lorem ipsum dolor sit amet consectetur adipiscing edivt.
                    Ut eget nulla in nibh tempus bibendum non quis sapien.</Text>
            </div>
            <ul className='messages-table-header'>
                <div>Subject</div>
                <div>From</div>
                {/* <div>Date</div> */}
                <div>Status</div>
                <div style={{ visibility: "hidden" }}>button</div>
            </ul>
            {/* Divider */}
            <div className="divider-horizantal" style={{ marginBottom: "10px", marginTop: 0 }}></div>
            
            {
                messages
                    .filter(each => each.reciever_email == email) 
                    .map((each, i) => (
                        <section key={i}>
                            <div>
                                <div className="messages-table">
                                    <div>{each.invitation_status=="Pending"? "You have been invited": "Accepted invite"}</div>
                                    <div>{each.sender_name}</div>
                                    <div>{each.invitation_status}</div> 
                                    
                                    <div>
                                        <Button onClick={() => handleButtonClick(each.id)}
                                            className={`${each.inviteStatus === "Pending" ? "pending-btn" : "open-or-close-btn"}`}>
                                            {each.inviteStatus === "Pending" ? "Read" : subjectOpen ? "Close" : "Open"}
                                        </Button>
                                    </div>
                                </div>

                                {/* Display subject and related content when the button is clicked */}
                                {activeBtnId === each.id && subjectOpen && (
                                    <div className='subject-open'>
                                        <Text type="p" className='invite-req-message'>
                                            Helena Roberts has invited you to answer our questionnaire to strengthen your relationship.
                                        </Text>
                                        <div className='btn-link-container'>
                                            <Button className='Accept-and-start-btn'>Accept and start</Button>
                                            <Text type="a" className='reject-invitation'>Reject invitation</Text>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="divider-horizantal" style={{ margin: "10px auto" }}></div>
                        </section>
                    ))
            }
        </DashboardLayout>
    )
}

export default ReceiveInvite;
