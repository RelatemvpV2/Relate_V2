import React, { useEffect, useState } from 'react'

// import Options from '../optionComponent/Options'
import Text from '../text/Text'
import Catagory from '../catagory/Catagory'
import Button from '../button/Button'
import Rating from '../rating/Rating'

import './quesionairModule.css'
import { getCategoryById } from '../../services/api/categoryApi'

const QuesionairModule = ({ categoryData, onAnswerChange, currentIndex, total }) => {

  const [category, setCategory] = useState(null);
  const [currentRelation, setCurrentRelation] = useState(JSON.parse(localStorage.getItem("active_relation")))
  const [partnerUser, setPartnerUser] = useState(null);

  const email = localStorage.getItem("email");


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
  useEffect(()=> {
    if (currentRelation && currentRelation.sender_email === email) {      
      setPartnerUser({ name: currentRelation.reciever_name, email: currentRelation.reciever_email, level1Status: currentRelation.reciever_level1_status })
    }
    if (currentRelation && currentRelation.reciever_email === email) {
      setPartnerUser({ name: currentRelation.sender_name, email: currentRelation.sender_email, level1Status: currentRelation.sender_level1_status })
    }
    console.log(partnerUser);
    
  },[])

  useEffect(() => {
    if (categoryData?.id) {
      fetchCategoryDetails(categoryData.id);
    }
  }, [categoryData]);

  const handleSelectedRating = (rating) => {
    if (rating && category) {
      let answer = {
        categoryId: category.id,
        questionId: category.questions[0].id,
        response: Number(rating),
        responseType: "text",
        format: "text"
      }
      onAnswerChange(answer)
    }
  }

  return (
    <div className='questionaire-div'>
      <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
      <Text className='questionaire-partnerName '> {partnerUser?.name!=null? partnerUser?.name: partnerUser?.email}</Text>

      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text questionaire-relation-review">Relation review</Text>

      <Catagory className={'catagory'} width={'80%'}>
        <p className='catagory-p'> {categoryData?.name}</p>
      </Catagory>
      {/* Divider */}
      {/* <div className="divider-horizantal"></div> */}

      {category?.questions.length > 0 ?
        <><Text type="p" className="text question-p">{category?.questions[0]?.question}</Text></> :
        <><Text type="p" className="text question-p">{"No Question"}</Text></>
      }

      <div className='options-selection'>
        {/* rating */}
        <Rating onRatingSelected={handleSelectedRating} options={category?.questions[0]?.options} />

        <Text type="p" className="text question-count" >Question {currentIndex + 1} of {total} | Please select score</Text>
        {/* <Text type="p" className="text select-score-p" style={{ margin: 0 }}>Please select score</Text> */}
      </div>

    </div>
  )
}

export default QuesionairModule