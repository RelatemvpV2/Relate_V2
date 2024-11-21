import React, { useState, useEffect } from 'react'

import Text from '../text/Text';
import DashboardLayout from '../dashboardLayout/DashboardLayout';
import Catagory from '../catagory/Catagory';
import Circle from '../circleComponent/Circle';
import Summary1EachCatogoryScore from './Summary1EachCatogoryScore';

//css
import './summary1stUser.css';
import Button from '../button/Button';
import { getAssessmentSummary } from '../../services/api/answerApi';
import { useNavigate } from 'react-router-dom';

const Summary1stUser = () => {

    const [data, setData] = useState(null); // State for storing API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [assessmentId, setAssessmentId] = useState(sessionStorage.getItem('current_assesment_id'));

    const navigate = useNavigate();

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            setLoading(true); // Start loading            
            const response = await getAssessmentSummary(sessionStorage.getItem('current_assesment_id'));  
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

    fetchData(); // Call the function on mount
  }, []); // Empty dependency array ensures it only runs once on mount

  const handleComparisonNavigate = () => {
    navigate('/level1/comparedResults')
  }

  return (
    <DashboardLayout>
      <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
      <Text className='questionaire-partnerName '>James Samuelson</Text>

      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text questionaire-relation-review">Relation review</Text>
      <Text type="p" className="text">Your Summary</Text>


      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text">First step completed in improving your relation. Here are your answers:</Text>
      <Catagory  className="summary-catagory">
        <div className="summary1CatagoryAlignment" style={{ height: '100%' }}>
          <p >Overall relation</p>
          <Circle bgColor={"#C68977"} color={"#F9EEE1"} optionVal={data?.totalScore} diameter={"40px"} />
          <Text type="a" href="#" className="links-text edit-in-summary" style={{ color: "rgba(65, 65, 78, 0.60)", textAlign: "left" }}>
            Edit
          </Text>
        </div>
      </Catagory>

      {/* loop this component with catogories and the scores of the each catagory */}

      {data && data.summary.length> 0 && data.summary.map((category, index) => (
        <Summary1EachCatogoryScore key={category.id || index} categoryData={category} />
      ))}

      <Button className='loginpage-button' onClick={handleComparisonNavigate} style={{margin:"45px auto"}}>Continue</Button>


      {/* Divider */}
      <div className="divider-horizantal"></div>

      <div className="links-textcontainer">
        {/*  Text component for the link */}
        <Text type="a" href="/" className="links-text" style={{ fontSize: "12px" }}>
          Go back
        </Text>
      </div>

    </DashboardLayout>
  )
};

export default Summary1stUser;