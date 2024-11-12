import React from 'react'

// import Options from '../optionComponent/Options'
import Text from '../text/Text'
import Catagory from '../catagory/Catagory'
import Button from '../button/Button'
import Rating from '../rating/Rating'

import './quesionairModule.css'

const QuesionairModule = ({categoryData, onAnswerChange}) => {

  const handleSelectedRating = (rating) => {
    let answer = {
      categoryId: categoryData.id,
      questionId: categoryData.questions[0].id,
      response: rating,
      responseType: "text", 
      format: "text"
  }
    onAnswerChange(answer)
  }

  return (
    <div className='questionaire-div'>
      <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
      <Text className='questionaire-partnerName '>James Samuelson</Text>

      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text questionaire-relation-review">Relation review</Text>

      <Catagory className={'catagory'} width={'80%'}>
        <p className='catagory-p'> {categoryData?.name}</p>
      </Catagory>
      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text question-p">{categoryData?.questions[0]?.question}</Text>
      <div className='options-selection'>
        <Text type="p" className="text question-count" style={{ margin: 0 }}>Question 1 of 9</Text>
        <Text type="p" className="text select-score-p" style={{ margin: 0 }}>Please select score</Text>

        {/* rating */}
        
        <Rating onRatingSelected={handleSelectedRating} />
      </div>

    </div>
  )
}

export default QuesionairModule