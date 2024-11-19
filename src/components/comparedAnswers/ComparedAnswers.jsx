import React, { useEffect, useState } from 'react'

import DashboardLayout from '../dashboardLayout/DashboardLayout'
import Text from '../text/Text'
import ScoreRow from '../scoreRow/ScoreRow'

import './comparedAnswers.css'


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

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                // const response = await getAllCategories();      
                // if (!response) {
                //   throw new Error(`HTTP error! Status: ${response.status}`);
                // }
                // const result = await response.json();
                setData(
                    [
                        {
                            "assessmentId": "assessmentID",
                            "categoryId": "categoryID",
                            "category": "Communication",
                            "questionId": "questionID",
                            "question": "question",
                            "answers": [
                                {
                                    "userId": "userID1",
                                    "response": "Frequently",
                                    "responseType": "media/audio/video/file",
                                    "format": ".pdf",
                                    "score": 5,
                                    "answeredDate": "2024-11-03T12:05:00Z",
                                    "isActive": true,
                                },
                                {
                                    "userId": "userID2",
                                    "response": "Frequently",
                                    "responseType": "media/audio/video/file",
                                    "format": ".pdf",
                                    "score": 2,
                                    "answeredDate": "2024-11-03T12:05:00Z",
                                    "isActive": true,
                                }
                            ],
                            "overAllScore": 4, //combined aggregated score of both the answers from partners
                            "sortOrderOfCategory": 1,
                        },
                    ]
                ); // Store data
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

                </div>
            </DashboardLayout>
        </div>
    )
}

export default ComparedAnswers