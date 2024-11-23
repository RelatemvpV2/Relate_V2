
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Text from '../text/Text';
import CatagoryStatusTable from '../catagoryStatusTable/CatagoryStatusTable';

//css
import './userdashboard.css';
import Button from '../button/Button';
import { getAllCategories } from '../../services/api/categoryApi';
import { sendInvite, getPartnerEmail, getAssessmentStatus } from '../../services/api/userAuthApi';

const userEmail = localStorage.getItem('email');

const UserDashboard = () => {
  const [partnerEmail, setPartnerEmail] = useState(null);
  const [partnerUser, setPartnerUser] = useState(null);
  const [userStatus, setUserStatus] = useState(false);
  const [currentRelation, setCurrentRelation] = useState(JSON.parse(localStorage.getItem("active_relation")))

  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setPartnerEmail(event.target.value);
  };

  const handleSendInvitation = async () => {
    try {
      if (partnerEmail === userEmail) {
        return; // If emails match, exit without sending invitation or showing an error
      }

      const payload = {
        receiver_email: partnerEmail,
        relation_type: "Brother", //default relation
      };

      const response = await sendInvite(payload);
      console.log("Invitation sent successfully:", response);
      // Navigate to the questionnaire page
      navigate('/startQuestionare/StartQuesPage');
    } catch (err) {
      console.log("Error sending invitation:", err);
    }
  };

  const handleResumeClick = () => {
    navigate('/assessment/Assessment'); // Navigate to the assessment page
  };

  const handleRemainderClick = () => {
    console.log("Remainder sent");
  };

  useEffect(() => {

    if (currentRelation && currentRelation.sender_email === email) {      
      setPartnerUser({ name: currentRelation.reciever_name, email: currentRelation.reciever_email, level1Status: currentRelation.reciever_level1_status })
    }
    if (currentRelation && currentRelation.reciever_email === email) {
      setPartnerUser({ name: currentRelation.sender_name, email: currentRelation.sender_email, level1Status: currentRelation.sender_level1_status })
    }
    console.log(currentRelation.sender_email, currentRelation.reciever_email, email);
    console.log(partnerUser);
    
    
  }, []);


  return (
    <div>
      <Text type="h3" className="user-dashboard-heading h3">
        My relation with
      </Text>
      <Text className="user-partnerName">
        {!currentRelation ? "No invitation sent" : partnerUser?.name}</Text>

      <div className="divider-horizantal"></div>

      {!currentRelation ? (
        <div className="upper-container">
          <div>
            <Text type="h3" className="user-dashboard-heading h3">
              Try an example
            </Text>
            <Text type="p" className="text" style={{ fontSize: "12px" }}>
              Curious to see how it works? Give it a try and invite your partner
              afterwards. <br /> (Your answers will not be saved)
            </Text>
            <Button className="userpage-button" style={{ marginTop: "5%" }}>Start Example</Button>
          </div>

          {/* Divider */}
          <div className='invisible_line'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="235" viewBox="0 0 2 235" fill="none">
              <path d="M1 0L1.00001 235" stroke="#41414E" strokeWidth="0.5" />
            </svg>
          </div>

          <div>
            <div className="invitePartner-container">
              <Text type="h3" className="user-dashboard-heading h3">
                Invite your partner
              </Text>
              <Text type="p" className="text" style={{ fontSize: "12px" }}>
                If you are ready to invite your partner, please type your partner's
                email and send your invitation.<br /> (Your answers will be saved)
              </Text>
              <section className='form_email'>
                <Text type="label" htmlFor="email" className="labels" style={{ textAlign: "left" }}>
                  Email
                </Text>
                <input
                  id="email"
                  type="email"
                  name="partnerEmail"
                  className="inviteuser-inputbox indent"
                  value={partnerEmail}
                  onChange={handleEmailChange}
                />
              </section>
            </div>
            <div className="userpage-buttoncontainer" style={{ marginTop: "30px" }}>
              <Button className="userpage-button" type="submit" onClick={handleSendInvitation}>
                Send invitation
              </Button>
            </div>
          </div>
        </div>
      ) : (currentRelation && partnerUser?.level1Status === "Pending" && partnerUser?.invitation_status === "Accepted" ?

        <div className="resume-container">
          <Text type="p" className="text" style={{ fontSize: "12px" }}>
            We need you to complete the questionnaire in order to help you in the best way.
          </Text>
          <Button className="userpage-button" onClick={handleResumeClick}>
            Resume
          </Button>
        </div> :
        (currentRelation && partnerUser?.level1Status === false && partnerUser?.invitation_status === "Accepted" ?

          <div className="remainder-container">
            <Text type="p" className="text" style={{ fontSize: "12px" }}>
              Waiting for your relation to complete the questionnaire. Soon you’ll be able to follow your progress.
            </Text>
            <Button className="userpage-button" onClick={handleRemainderClick}>
              Remainder
            </Button>
          </div> :
          <div></div>
        )
      )
      }

      <div className="graph-section ">
        <p style={{ marginTop: '3%' }}>graphs integration</p>
        <Button className='dashboardGraphsBtn'>View your latest comparison summary</Button>
      </div>

      {/* Table */}
      <CatagoryStatusTable />
    </div>
  );
};

export default UserDashboard;
