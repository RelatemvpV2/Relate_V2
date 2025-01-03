
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Text from '../text/Text';
import CatagoryStatusTable from '../catagoryStatusTable/CatagoryStatusTable';

//css
import './userdashboard.css';
import Button from '../button/Button';
import { getAllCategories } from '../../services/api/categoryApi';
import { sendInvite, getPartnerEmail, getAssessmentStatus, sendReminder } from '../../services/api/userAuthApi';
import { AppContext } from '../../contexts/AppContext'

import ReactECharts from 'echarts-for-react'; // import reactecharts
import { getAnswersGroupByAssessment } from '../../services/api/answerApi';
import { right } from '@popperjs/core';

const UserDashboard = () => {

  const { current_Relation, setCurrent_Relation } = useContext(AppContext)
  const [partnerEmail, setPartnerEmail] = useState(null);
  const [partnerUser, setPartnerUser] = useState(null);
  const [userStatus, setUserStatus] = useState(false);


  const [currentRelation, setCurrentRelation] = useState(JSON.parse(localStorage.getItem("active_relation")) || current_Relation)

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
      right: 20,
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
      type: 'category',
      show: true,
      data: [1, 2, 3, 4, 5, 6, 7]
    },
    series: [
      {
        name: 'User1',
        type: 'line',
        data: [1, 1]
      },
      {
        name: 'User2',
        type: 'line',
        data: [1, 1]
      }
    ]
  };

  const option1 = {
    title: {
      text: 'Overall Relation Status'
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
      show: false
      
    },
    yAxis: {
      type: 'category',
      show: true,
      position: 'right',
      data: ['1', '2', '3', '4', '5', '6', '7']
    },

  };


  const handleTryQuestionaire = () => {
    navigate('/assessment/Assessment?assessment-type=tryQ')
  }

  const handleSendInvitation = async () => {

    try {
      if (partnerEmail === email) {
        return; // If emails match, exit without sending invitation or showing an error
      }

      const payload = {
        receiver_email: partnerEmail,
        relation_type: "Spouse", //default relation
      };

      const response = await sendInvite(payload);
      localStorage.setItem("active_relation", JSON.stringify(response.data.response))
      sessionStorage.setItem('current_assesment_id', response.data.response.assessment_id)
      navigate('/startQuestionare/StartQuesPage');
    } catch (err) {
      console.log("Error sending invitation:", err);
    }
  };

  const handleResumeClick = () => {
    localStorage.setItem("active_relation", JSON.stringify(currentRelation))
    sessionStorage.setItem('current_assesment_id', currentRelation.assessment_id)
    navigate('/assessment/Assessment'); // Navigate to the assessment page
  };

  const handleComparisonSummary = () => {
    navigate('/level1/comparedResults');
  }

  const handleRemainderClick = async(compat_id) => {
    try {
        const response = await sendReminder(
            {
                "id": window.localStorage.getItem('current_assesment_id')
            }
        )
        console.log(response);
        alert(response?.data?.message)
        
    } catch (error) {
        console.error("Error fetching messages:", error)
    }
}

  useEffect(() => {
    setCurrentRelation(current_Relation)
  }, [current_Relation])

  useEffect(() => {

    if (currentRelation && currentRelation.sender_email === email) {
      setPartnerUser({ name: currentRelation.reciever_name, email: currentRelation.reciever_email, level1Status: currentRelation.sender_level1_status })
    }

    if (currentRelation && currentRelation.reciever_email === email) {
      setPartnerUser({ name: currentRelation.sender_name, email: currentRelation.sender_email, level1Status: currentRelation.sender_level1_status })
    }

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

  }, [currentRelation]);


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
          <>
            <div className="remainder-container">
              <Text type="p" className="text" style={{ fontSize: "12px" }}>
                Waiting for your relation to complete the questionnaire. Soon you’ll be able to follow your progress.
              </Text>
              <Button className="userpage-button" onClick={handleRemainderClick}>
                Remainder
              </Button>
            </div>
          </>
          :
          <div></div>
        )
      )
      }

      <div className="graph-section">
        <div className="chart-container">
          <div className="charts">
            <div className="chart-box">
              <ReactECharts option={option1} header={"Overall Relation Status"} />
            </div>
            <div className="chart-box">
              <ReactECharts option={option} header={"Overall Relation Progress"} />
            </div>
          </div>
        </div>



        <Button className='dashboardGraphsBtn' onClick={handleComparisonSummary} >View your latest comparison summary</Button>
      </div>

      {/* Table */}
      <CatagoryStatusTable />
    </div>
  );
};

export default UserDashboard;
