import React from 'react'

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

                    <Text type="p" className="text" style={{fontSize:'12px'}}>First step completed in improving your relation. Here are your answers in the different categories:</Text>


                    <div className="legend">
                        <span className="you">You</span>
                        <span className="partner">Partner</span>
                    </div>

                    <div className="score-table">
                        {categories.map((category, index) => (
                            <ScoreRow key={index} category={category} />
                        ))}
                    </div>

                </div>
            </DashboardLayout>
        </div>
    )
}

export default ComparedAnswers