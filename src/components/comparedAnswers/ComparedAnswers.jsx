import React, { useEffect, useState } from 'react'

import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Text from '../text/Text'
import ScoreRow from '../scoreRow/ScoreRow'

import './comparedAnswers.css'
import { getAnswersGroupByAssessment, getAssessmentAnswerByQuestion } from '../../services/api/answerApi'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'


const categories = [
    { name: 'Overall relation', you: 1, partner: 3 },
    { name: 'Communication', you: 3, partner: 1 },
    { name: 'Intimacy', you: 2, partner: 1 },
    { name: 'Values', you: 3, partner: 4 },
    { name: 'Economy', you: 2, partner: 2 },
    { name: 'Child rearing', you: 2, partner: 6 },
    { name: 'Trust', you: 3, partner: 3 },
    { name: 'Boundaries', you: 6, partner: 7 },
    { name: 'Everyday Life', you: 5, partner: 5 },
];


const ComparedAnswers = () => {
    const [data, setData] = useState(null); // State for storing API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    const navigate = useNavigate();

    const handleRecommendationNavigate = () => {
        navigate('/level1/subscriptions')
      }
    

    useEffect(() => {
        // Function to fetch data
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

        fetchData(); // Call the function on mount
    }, []); // Empty dependency array ensures it only runs once on mount


    return (
        <div>
            <DashboardLayout>
                <div className='compared-answers-container'>
                    <Text type="h3" className='user-dashboard-heading h3' >My relation with</Text>
                    <Text className='user-partnerName'>James Samuelson</Text>

                    {/* Divider */}
                    <div className="divider-horizantal"></div>
                    <Text type="p" className="text questionaire-relation-review">Relation review</Text>
                    <Text type="p" className="text" style={{ fontSize: "40px" }}>Compared answers</Text>

                    <Text type="p" className="text" style={{ fontSize: '12px' }}>First step completed in improving your relation. Here are your answers in the different categories:</Text>


                    <div className="legend">
                        <span className="you">You</span>
                        <span className="partner">Partner</span>
                    </div>

                    <div className="score-table">
                        {data?.map((category, index) => (
                            <ScoreRow key={index} category={category} />
                        ))}
                    </div>

                    <Button className='loginpage-button' onClick={handleRecommendationNavigate} style={{margin:"45px auto"}}>See Recommendations</Button>


                </div>
            </DashboardLayout>
        </div>
    )
}

export default ComparedAnswers