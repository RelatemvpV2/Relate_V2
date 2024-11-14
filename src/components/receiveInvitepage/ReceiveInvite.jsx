





import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Text from '../text/Text'
import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Button from '../button/Button'
import { getPartnerEmail, updateInvitationStatus } from '../../services/api/userAuthApi'


//css
import './receiveInvite.css'


/* 

************login from keerthi1822*********

assessment_id:"146c5c29-3350-4354-8ffe-12cc00c996f4"
id : "a6b7f522-70d7-4566-880d-565dcdea8e27"
invitation_status:"Declined"
invite_sent_date:"2024-11-14T12:19:59.094662"
reciever_email:"keerthi1822@gmail.com"
reciever_level1_status:false
reciever_name:"keerthika Alampalli"
sender_email:"keerthikagangisetty@gmail.com"
sender_level1_status:false
sender_name:"Name"

**************login from keerthikagangisetty**********
0
: 
assessment_id:"146c5c29-3350-4354-8ffe-12cc00c996f4"
id:"a6b7f522-70d7-4566-880d-565dcdea8e27"
invitation_status:"Declined"
invite_sent_date:"2024-11-14T12:19:59.094662"
reciever_email:"keerthi1822@gmail.com"
reciever_level1_status:false
reciever_name:"keerthika Alampalli"
sender_email:"keerthikagangisetty@gmail.com"
sender_level1_status:false
sender_name:"Name"

*/


const email = window.localStorage.getItem("email");

const ReceiveInvite = () => {
    const [messages, setMessages] = useState([])
    const [newInvite, setNewInvite] = useState(true)
    const [activeBtnId, setActiveBtnId] = useState(null)
    const [subjectOpen, setSubjectOpen] = useState(false)
    const [invitation_status, setInvitation_status] = useState('pending')

    const navigate = useNavigate();


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


    const handleInviteStatus = async (compat_id) => {
        console.log(invitation_status)
        try {
            const response = await updateInvitationStatus(
                {
                    "compat_id": compat_id || window.localStorage.getItem('current_assesment_id'),
                    "action": invitation_status
                }
            )

            if (invitation_status === 'Accept')
                navigate("/startQuestionare/StartQuesPage")

            if (invitation_status === 'Decline')
                navigate("/dashboard")


            console.log("API response:", response.data);
            setMessages(response.data)
        } catch (error) {
            console.error("Error fetching messages:", error)
        }
    }

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


            {
                (messages ? messages
                    .filter(each => each.reciever_email == email)
                    .map((each, i) => (
                        <section key={i}>
                            <ul className='messages-table-header'>
                                <div>Subject</div>
                                <div>From</div>
                                {/* <div>Date</div> */}
                                <div>Status</div>
                                <div style={{ visibility: "hidden" }}>button</div>
                            </ul>
                            {/* Divider */}
                            <div className="divider-horizantal" style={{ marginBottom: "10px", marginTop: 0 }}></div>
                            <div>
                                <div className="messages-table">
                                    <div>{each.invitation_status == "Pending" ? "You have been invited" : `${each.invitation_status} invite`}</div>
                                    <div>{each.sender_name}</div>
                                    <div>{each.invitation_status}</div>

                                    <div>
                                        <Button onClick={() => handleButtonClick(each.id)}
                                            className={`${each.inviteStatus === "Pending" ? "pending-btn" : "open-or-close-btn"}`}>
                                            {each.invitation_status === "Pending" ? "Read" : subjectOpen ? "Close" : "Open"}
                                        </Button>
                                    </div>
                                </div>

                                {/* Display subject and related content when the button is clicked */}
                                {activeBtnId === each.id && subjectOpen && (
                                    <div className='subject-open'>
                                        {each.invitation_status === 'Pending' && <Text type="p" className='invite-req-message'>
                                            {each.sender_name} has invited you to answer our questionnaire to strengthen your relationship.
                                        </Text>
                                        }
                                        {each.invitation_status === 'Declined' &&
                                            <Text type="p" className='invite-req-message'>
                                                You have missed the chance to strengthen your relationship with {each.sender_name}
                                            </Text>}
                                        {each.invitation_status === 'Accepted' &&
                                            <Text type="p" className='invite-req-message'>
                                                Click the button below to start journey to strengthen your relation with {each.sender_name}
                                            </Text>}
                                        {each.invitation_status == "Pending" && <div className='btn-link-container'>
                                            <Button className='Accept-and-start-btn' onClick={() => {
                                                console.log(each)
                                                setInvitation_status('Accept')
                                                window.localStorage.setItem('current_assesment_id', each.assessment_id);
                                                handleInviteStatus(each.id);
                                            }}>Accept and start</Button>

                                            <Text type="a" className='reject-invitation' onClick={() => {
                                                setInvitation_status('Decline')
                                                handleInviteStatus(each.id)
                                            }}>Reject invitation</Text>
                                        </div>
                                        }
                                        {each.invitation_status == "Accepted"
                                            && <div className='btn-link-container'>
                                                <Button className='Accept-and-start-btn' onClick={() => {
                                                    console.log(each)
                                                    setInvitation_status('Accept')
                                                    window.localStorage.setItem('current_assesment_id', each.assessment_id);
                                                    handleInviteStatus(each.id);
                                                }}>start</Button>
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>

                            <div className="divider-horizantal" style={{ margin: "10px auto" }}></div>
                        </section>
                    ))
                    : <p>"No messages found"</p>
                )
            }
        </DashboardLayout>
    )
}

export default ReceiveInvite;
