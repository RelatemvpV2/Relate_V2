

import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
//components
import Text from '../text/Text'
import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Button from '../button/Button'
import { getPartnerEmail, updateInvitationStatus } from '../../services/api/userAuthApi'

//css
import './receiveInvite.css'

const email = window.localStorage.getItem("email");

const ReceiveInvite = () => {
    const [messages, setMessages] = useState([])
    /* const [newInvite, setNewInvite] = useState(true) */
    const [activeBtnId, setActiveBtnId] = useState(null)
    const [subjectOpen, setSubjectOpen] = useState(false)
    const [invitation_status, setInvitation_status] = useState('pending')

    const navigate = useNavigate();


    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await getPartnerEmail()
                // response.data.filter(user => user.partner_email == sessionStorage.get('user-email'))
                setMessages(response.data)
            } catch (error) {
                console.error("Error fetching messages:", error)
            }
        }
        fetchMessages()

        return () => {
            window.localStorage.removeItem("current_assesment_id")
        }
    }, [])

    const handleInviteStatus = async (compat_id, newStatus) => {
        try {
            const response = await updateInvitationStatus(
                {
                    "compat_id": compat_id || window.localStorage.getItem('current_assesment_id'),
                    "action": newStatus
                }
            )

            if (newStatus === 'Accept')
                navigate("/assessment/Assessment")

            if (newStatus === 'Decline')
                navigate("/dashboard")


            setMessages(response.data)
        } catch (error) {
            console.error("Error fetching messages:", error)
        }
    }

    const handleButtonClick = (id) => {
        setActiveBtnId(id)
        setSubjectOpen(!subjectOpen)
    }

    const acceptAndRedirectToAssessment = (compat) => {
        sessionStorage.setItem('current_assesment_id', compat.assessment_id)
        if(sessionStorage.getItem('current_assesment_id') && !compat.sender_level1_status) {
            navigate("/assessment/Assessment");
        }
    }

    return (
        <DashboardLayout>
            <div className='messages-header'>
                <Text type="h3">Messages</Text>
                <Text type="p">Below you’ll find. Lorem ipsum dolor sit amet consectetur adipiscing edivt.
                    Ut eget nulla in nibh tempus bibendum non quis sapien.</Text>
            </div>


            {
                (messages && messages.length > 0)
                    ? (messages
                        .filter(each => each.reciever_email === email)
                        .map((each, i) => (
                            <><section key={i+ each.assessment_id}>
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
                                        <div>{each.invitation_status === "Pending" ? "You have been invited" : `${each.invitation_status} invite`}</div>
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
                                            <Text type="p" className='invite-req-message'>
                                                {each.sender_name} has invited you to answer our questionnaire to strengthen your relationship.
                                            </Text>


                                            {each.invitation_status === "Pending" && <div className='btn-link-container'>
                                                <Button className='Accept-and-start-btn' onClick={() => {
                                                    setInvitation_status('Accept');
                                                    window.localStorage.setItem('current_assesment_id', each.assessment_id);
                                                    handleInviteStatus(each.id, 'Accept');
                                                }}>Accept and start</Button>

                                                <Text type="a" className='reject-invitation' onClick={() => {
                                                    setInvitation_status('Decline');
                                                    handleInviteStatus(each.id, 'Decline');
                                                }}>Reject invitation</Text>
                                            </div>}
                                            {each.invitation_status === "Accepted" && <div className='btn-link-container'>
                                                <Button className='Accept-and-start-btn' onClick={() => {
                                                    acceptAndRedirectToAssessment(each)
                                                }}>{each.invitation_status}</Button>

                                            </div>}
                                        </div>
                                    )}
                                </div>
                                <div className="divider-horizantal" style={{ margin: "10px auto" }}></div>

                                <div>
                                    <Text type="a" className='links-text' onClick={() => {
                                        (!each.sender_level1_status) && navigate("/dashboard")
                                    }}>go to dashboard</Text>
                                </div>

                            </section >
                            </>

                        )))
                    : <p>"No Invites yet"</p>

            }
        </DashboardLayout>
    )
}

export default ReceiveInvite;
