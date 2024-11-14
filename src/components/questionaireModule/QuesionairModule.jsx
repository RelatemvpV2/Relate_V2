import React, { useEffect, useState } from 'react'

// import Options from '../optionComponent/Options'
import Text from '../text/Text'
import Catagory from '../catagory/Catagory'
import Button from '../button/Button'
import Rating from '../rating/Rating'

import './quesionairModule.css'
import { getCategoryById } from '../../services/api/categoryApi'

const QuesionairModule = ({categoryData, onAnswerChange, currentIndex, total, answer}) => {

  const [category, setCategory] = useState(null);

   // API call function
   const fetchCategoryDetails = async (categoryId) => {
    try {
      const response = await getCategoryById(categoryId);
      const data = await response.data;
      setCategory(data);
      // You can set this data to a state if you need to display or use it in the component
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  useEffect(() => {
    if (categoryData?.id) {
      fetchCategoryDetails(categoryData.id);
    }
  }, [categoryData]);

  const handleSelectedRating = (rating) => {
    let answer = {
      categoryId: category.id,
      questionId: category.questions[0].id,
      response: rating,
      responseType: "text", 
      format: "text"
  }
  console.log(categoryData);
  
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

      {category?.questions.length > 0 ? 
      <><Text type="p" className="text question-p">{category?.questions[0]?.question}</Text></>:
      <><Text type="p" className="text question-p">{"No Question"}</Text></>
      }
      
      <div className='options-selection'>
        <Text type="p" className="text question-count" style={{ margin: 0 }}>Question {currentIndex+1} of {total}</Text>
        <Text type="p" className="text select-score-p" style={{ margin: 0 }}>Please select score</Text>

        {/* rating */}
        
        <Rating onRatingSelected={handleSelectedRating} answer={answer} />
      </div>

    </div>
  )
}

export default QuesionairModule