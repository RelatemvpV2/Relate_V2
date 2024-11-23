import React, { useEffect } from 'react'

import Text from '../text/Text'
import Circle from '../circleComponent/Circle' 

import './summary1stUser.css'
import { useNavigate } from 'react-router-dom'

const Summary1EachCatogoryScore = ({categoryData}) => {

  const navigate = useNavigate();
  
  const redirectToAssessmentQuestion = (category) => {
    console.log(category);
    localStorage.setItem("selected_question_edit", category.categoryId)
    navigate('/assessment/Assessment?assessment-type=edit')
  }

  return (
    <div className="summary1CatagoryAlignment">
                    <p>{categoryData?.categoryName}</p>
                    <Circle bgColor={"#C68977"} color={"#F9EEE1"} optionVal={categoryData?.answer?.score} diameter={"40px"} />
                    <Text type="a" href="#" className="links-text edit-in-summary"
                     style={{color:"rgba(65, 65, 78, 0.60)",textAlign:'left'}}
                     onClick={() => redirectToAssessmentQuestion(categoryData)}>
                        Edit
                    </Text>
                </div>
  )
}

export default Summary1EachCatogoryScore