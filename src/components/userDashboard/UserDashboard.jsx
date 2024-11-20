
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
  const [partnerEmail, setPartnerEmail] = useState("");
  const [data, setData] = useState(null); // State for storing API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [showUpperContainer, setShowUpperContainer] = useState(true);
  const [userStatus, setUserStatus] = useState(false);
  const [invitationPending, setInvitationPending] = useState(false); // New state for invitation status
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
    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
  
        // Fetch all categories
        console.log("Fetching categories...");
        const response = await getAllCategories();  
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.data;
        setData(result);
      
  
        try {
          // Fetch partner emails
          console.log("Fetching partner emails for user:", userEmail);
          const partnerResponse = await getPartnerEmail(userEmail);
          const partnerEmails = partnerResponse?.data || [];
          console.log("Partner emails fetched successfully:", partnerEmails);
          setShowUpperContainer(partnerEmails.length === 0);
          

  
          // Fetch assessment status if partner emails exist
          if (partnerEmails.length > 0) {
            console.log("Partner emails exist, fetching assessment status...");
            const assessmentResponse = await getAssessmentStatus();
            console.log("Assessment status fetched successfully:", assessmentResponse?.data);
  
            const user1Status = assessmentResponse?.data?.user1_level1_status || false;
            const partnerInvitationPending = partnerEmails[0]?.invitation_status === "Pending";
  
            console.log("User's assessment status:", user1Status);
            console.log("Partner invitation status:", partnerInvitationPending);
  
            setUserStatus(user1Status);
            setInvitationPending(partnerInvitationPending);
          } else {
            console.log("No partner emails found, skipping assessment status fetch.");
          }
        } catch (partnerError) {
          console.error("Error fetching partner emails or assessment status:", partnerError);
          setError(partnerError.message || "Failed to fetch partner details.");
        }
      } catch (categoryError) {
        console.error("Error fetching categories:", categoryError);
        setError(categoryError.message || "Failed to fetch categories.");
      } finally {
        setLoading(false); // Stop loading
      }
    };
  
    fetchData(); // Call the function on mount
  }, []); 
  
  

  return (
    <div>
      <Text type="h3" className="user-dashboard-heading h3">
        My relation with
      </Text>
      <Text className="user-partnerName">No invitation sent</Text>

      {/* Divider */}
      <div className="divider-horizantal"></div>

      {true ? (
        <div className="upper-container">
          <div>
            <Text type="h3" className="user-dashboard-heading h3">
              Try an example
            </Text>
            <Text type="p" className="text" style={{ fontSize: "12px" }}>
              Curious to see how it works? Give it a try and invite your partner
              afterwards. <br/> (Your answers will not be saved)
            </Text>
            <Button className="userpage-button" style={{marginTop:"5%"}}>Start Example</Button>
          </div>

          {/* Divider */}
          <div className='invisible'>
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
                email and send your invitation.<br/> (Your answers will be saved)
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
      ) : !userStatus && (
        <div className="resume-container">
          <Text type="p" className="text" style={{ fontSize: "12px" }}>
            We need you to complete the questionnaire in order to help you in the best way.
          </Text>
          <Button className="userpage-button" onClick={handleResumeClick}>
            Resume
          </Button>
        </div>
      )}

      {/* Remainder container */}
      {invitationPending && userStatus && (
        <div className="remainder-container">
          <Text type="p" className="text" style={{ fontSize: "12px" }}>
            Waiting for your relation to complete the questionnaire. Soon you’ll be able to follow your progress.
          </Text>
          <Button className="userpage-button" onClick={handleRemainderClick}>
            Remainder
          </Button>
        </div>
      )}

      
      <div className="graph-section blurred-content ">
      <p style={{marginTop:'3%'}}>graphs integration</p>
        <Button className='dashboardGraphsBtn'>View your latest comparison summary</Button>
      </div>

      {/* Table */}
      <CatagoryStatusTable />
    </div>
  );
};

export default UserDashboard;
