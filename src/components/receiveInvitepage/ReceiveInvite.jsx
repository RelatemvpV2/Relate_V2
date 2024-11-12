import React, { useState } from 'react'

import Text from '../text/Text'
import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Button from '../button/Button'

//css
import './receiveInvite.css'

const messages = [{
    id: 1,
    subject: "You've been invited",
    from: "Rani",
    inviteStatus: "Pending"/* Accept/Pending/Reject */
},
{
    id: 2,
    subject: "Lorem Ipsum",
    from: "Rani2",
    inviteStatus: "Reject"/* Accept/Pending/Reject */
},
]

const ReceiveInvite = () => {
    const [newInvite, setNewInvite] = useState(true)
    const [activeBtnId, setActiveBtnId] = useState(null)
    const [subjectOpen, setSubjectOpen] = useState(false)


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
                <div>Date</div>
                <div style={{ visibidivty: "hidden" }}>button</div>
            </ul>
            {/* Divider */}
            <div className="divider-horizantal" style={{ marginBottom: "10px", marginTop: 0 }}></div>
            {
                messages.map((each, i) => {
                    return <section key={i}>
                        <div>
                            <div className="messages-table">
                                <div>{each.subject}</div>
                                <div>{each.from}</div>{/* divnk */}
                                <div>{new Date().toDateString()}</div>

                                <div className=''>
                                    {/* pending btn = Read btn */}
                                    <Button onClick={() => handleButtonClick(each.id)}
                                        className={`${each.inviteStatus === "Pending" ? "pending-btn" : "open-or-close-btn"}`}>
                                        {each.inviteStatus === "Pending"
                                            ? "Read"
                                            : subjectOpen ? "Close" : "Open"
                                        }</Button>

                                </div>
                            </div>
                            {
                                (activeBtnId === each.id && subjectOpen) && (<div className='subject-open'>
                                    <Text type="p" className='invite-req-message'>Helena Roberts have invited you to answer our questionnaire to strengthen your relationship.</Text>
                                    <div className='btn-link-container'>
                                        <Button className='Accept-and-start-btn'>Accept and start</Button>
                                        <Text type="a" className='reject-invitation'>Reject invitation</Text>
                                    </div>
                                </div>
                                )
                            }

                        </div>

                        {/* Divider */}
                        <div className="divider-horizantal" style={{ margin: "10px auto" }}></div>
                    </section>
                })
            }


        </DashboardLayout>
    )
}

export default ReceiveInvite