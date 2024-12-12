

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
                setMessages(response.data.message)
                console.log(messages);

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

            localStorage.setItem("active_relation", JSON.stringify(response.data.response))
            sessionStorage.setItem('current_assesment_id', response.data.response.assessment_id)

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
        localStorage.setItem("active_relation", JSON.stringify(compat))
        sessionStorage.setItem('current_assesment_id', compat.assessment_id)
        if (sessionStorage.getItem('current_assesment_id') && !compat.sender_level1_status) {
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
                        .filter(msg => (msg.invitation_status !== "Accepted"))
                        // .filter(msg => (msg.invitation_status !== "Accepted" && msg.sender_email !== email))
                        .map((msg, i) => (
                            <><section key={i + msg.assessment_id}>
                                <ul className='messages-table-header'>
                                    <div>Subject</div>
                                    <div>From</div>
                                    <div>To</div>
                                    <div>Status</div>
                                    <div style={{ visibility: "hidden" }}>button</div>
                                </ul>
                                {/* Divider */}
                                <div className="divider-horizantal" style={{ marginBottom: "10px", marginTop: 0 }}></div>
                                <div>
                                    <div className="messages-table">

                                        <div>{msg.invitation_status === "Pending" ? "You have been invited" : `${msg.invitation_status} invite`}</div>
                                        <div>{msg.sender_name}</div>
                                        <div>{msg.reciever_name ? msg.reciever_name : msg.reciever_email}</div>
                                        <div>{msg.invitation_status}</div>
                                        {
                                            msg.sender_email !== email ?
                                                <div>
                                                    <Button onClick={() => handleButtonClick(msg.id)}
                                                        className={`${msg.inviteStatus === "Pending" ? "pending-btn" : "open-or-close-btn"}`}>
                                                        {msg.invitation_status === "Pending" ? "Read" : subjectOpen ? "Close" : "Open"}
                                                    </Button>
                                                </div> :
                                                <div>
                                                    <Button
                                                        className={`${msg.inviteStatus === "Pending" ? "pending-btn" : "open-or-close-btn"}`}>
                                                        {"Pending"}
                                                    </Button>
                                                </div>
                                        }


                                    </div>

                                    {/* Display subject and related content when the button is clicked */}
                                    {activeBtnId === msg.id && subjectOpen && (
                                        <div className='subject-open'>
                                            <Text type="p" className='invite-req-message'>
                                                {msg.sender_name} has invited you to answer our questionnaire to strengthen your relationship.
                                            </Text>


                                            {msg.invitation_status === "Pending" && <div className='btn-link-container'>
                                                <Button className='Accept-and-start-btn' onClick={() => {
                                                    setInvitation_status('Accept');
                                                    sessionStorage.setItem('current_assesment_id', msg.assessment_id);
                                                    handleInviteStatus(msg.id, 'Accept');
                                                }}>Accept and start</Button>

                                                <Text type="a" className='reject-invitation' onClick={() => {
                                                    setInvitation_status('Decline');
                                                    handleInviteStatus(msg.id, 'Decline');
                                                }}>Reject invitation</Text>
                                            </div>}
                                            {msg.invitation_status === "Accepted" && <div className='btn-link-container'>
                                                <Button className='Accept-and-start-btn' onClick={() => {
                                                    acceptAndRedirectToAssessment(msg)
                                                }}>{msg.invitation_status}</Button>

                                            </div>}
                                        </div>
                                    )}
                                </div>
                                <div className="divider-horizantal" style={{ margin: "10px auto" }}></div>

                                {/*  <div>
                                    <Text type="a" className='links-text' onClick={() => {
                                        (!msg.sender_level1_status) && navigate("/dashboard")
                                    }}>go to dashboard</Text>
                                </div> */}

                            </section >
                            </>

                        )))
                    : <p>"No Invites yet"</p>

            }
        </DashboardLayout>
    )
}

export default ReceiveInvite;
