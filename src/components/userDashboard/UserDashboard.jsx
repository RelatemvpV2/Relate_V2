
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

import ReactECharts from 'echarts-for-react'; // import reactecharts
import { getAnswersGroupByAssessment } from '../../services/api/answerApi';

const UserDashboard = () => {
  const [partnerEmail, setPartnerEmail] = useState(null);
  const [partnerUser, setPartnerUser] = useState(null);
  const [userStatus, setUserStatus] = useState(false);
  const [currentRelation, setCurrentRelation] = useState(JSON.parse(localStorage.getItem("active_relation")))

  const [data, setData] = useState(null); // State for storing API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setPartnerEmail(event.target.value);
  };

  const option = {
    title: {
      text: 'Overall Relation Progress'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['User1', 'User2']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2021', '2022', '2023', '2024', '2025', '2026', '2027']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'User1',
        type: 'line',
        data: [2, 3, 4, 7, 5, 6, 4]
      },
      {
        name: 'User2',
        type: 'line',
        data: [1, 4, 5, 5, 3, 5, 3]
      }
    ]
  };

  const handleTryQuestionaire = () => {
    navigate('/assessment/Assessment?assessment-type=tryQ')
  }

  const handleSendInvitation = async () => {

    localStorage.setItem("active_relation", JSON.stringify(partnerEmail))

    try {
      if (partnerEmail === email) {
        return; // If emails match, exit without sending invitation or showing an error
      }

      const payload = {
        receiver_email: partnerEmail,
        relation_type: "Spouse", //default relation
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
    sessionStorage.setItem('current_assesment_id', currentRelation.assessment_id)
    navigate('/assessment/Assessment'); // Navigate to the assessment page
  };

  const handleRemainderClick = () => {
    console.log("Remainder sent");
  };

  useEffect(() => {
 
    if (currentRelation && currentRelation.reciever_email === email) {
      setPartnerUser({ name: currentRelation.sender_name, email: currentRelation.sender_email, level1Status: currentRelation.sender_level1_status })
    }
   /*  console.log(partnerUser); */

    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await getAnswersGroupByAssessment(sessionStorage.getItem('current_assesment_id'));
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setData(response.data); // Store data
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // Stop loading
      }
    };
    
    if (currentRelation) {
      fetchData(); // Call the function on mount
    }
    else {
      console.log("there is no current relation available")

    }

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
            <Button 
            className="userpage-button" 
            style={{ marginTop: "5%" }}
            onClick={handleTryQuestionaire}
            >Start Example</Button>
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
      ) : (currentRelation && (partnerUser?.level1Status === "Pending" || partnerUser?.level1Status === false)
        && currentRelation?.invitation_status === "Accepted" ?

        <div className="resume-container">
          <Text type="p" className="text" style={{ fontSize: "12px" }}>
            We need you to complete the questionnaire in order to help you in the best way.
          </Text>
          <Button className="userpage-button" onClick={() => handleResumeClick()}>
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
        <p style={{ margin: '3% auto',width:"90%" }}><ReactECharts option={option} /></p>

        <Button className='dashboardGraphsBtn'>View your latest comparison summary</Button>
      </div>

      {/* Table */}
      <CatagoryStatusTable />
      
    </div>
  );
};

export default UserDashboard;
