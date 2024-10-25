import React from 'react'

// import Options from '../optionComponent/Options'
import Text from '../text/Text'
import Catagory from '../catagory/Catagory'
import Button from '../button/Button'
import Rating from '../rating/Rating'

import './quesionairModule.css'

const QuesionairModule = () => {
  return (
    <div className='questionaire-div'>
      <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
      <Text className='questionaire-partnerName '>James Samuelson</Text>

      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text questionaire-relation-review">Relation review</Text>

      <Catagory width={'80%'}>
        <p className='catagory-p'> Communication</p>
      </Catagory>
      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Text type="p" className="text question-p">How well are your and your partner communicating today?</Text>
      <div className='options-selection'>
        <Text type="p" className="text question-count" style={{ margin: 0 }}>Question 1 of 9</Text>
        <Text type="p" className="text select-score-p" style={{ margin: 0 }}>Please select score</Text>

        {/* rating */}
        
        <Rating />
      </div>


      {/* Divider */}
      <div className="divider-horizantal"></div>

      <Button className='loginpage-button'>Continue</Button>
      <div className="links-textcontainer">
        {/*  Text component for the link */}
        <Text type="a" href="/" className="links-text" style={{ fontSize: "12px" }}>
          Go back
        </Text>
      </div>
    </div>
  )
}

export default QuesionairModule