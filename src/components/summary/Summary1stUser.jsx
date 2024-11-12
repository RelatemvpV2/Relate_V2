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

const Summary1stUser = () => {

    const [data, setData] = useState(null); // State for storing API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [assessmentId, setAssessmentId] = useState(localStorage.getItem("assessment-id"));

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            setLoading(true); // Start loading
            const response = await getAssessmentSummary(assessmentId);  
            if (!response) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.data;
            setData(result); // Store data
          } catch (err) {
            setError(err.message); // Store error message
          } finally {
            setLoading(false); // Stop loading
          }
        };
    
        fetchData(); // Call the function on mount
        console.log(data);
      }, []); // Empty dependency array ensures it only runs once on mount
    
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
            <Catagory width={'400px'}>
                <div className="summary1CatagoryAlignment" style={{ height: '100%' }}>
                    <p >Overall relation</p>
                    <Circle bgColor={"#C68977"} color={"#F9EEE1"} optionVal={"1"} diameter={"50px"} />
                    <Text type="a" href="#" className="links-text" style={{ color: "rgba(65, 65, 78, 0.60)", textAlign: "left" }}>
                        Edit
                    </Text>
                </div>
            </Catagory>

            <p className='summary-catagories-p'>Catagories</p>

            {/* Divider */}
            <div className="divider-horizantal" style={{ width: "400px", marginTop: 0 }}></div>

            {/* loop this component with catogories and the scores of the each catagory */}

            {data && data.map(category => (
              <Summary1EachCatogoryScore  categoryData={category} />
            ))}
           
            <p> need to loop the same component for all catogories with their scores.</p>

            {/* Divider */}
            <div className="divider-horizantal" style={{ width: "400px" }}></div>

            <Button className='loginpage-button'>Continue</Button>
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