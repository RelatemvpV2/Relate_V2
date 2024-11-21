import React, { useEffect } from 'react'

import Text from '../text/Text'
import Circle from '../circleComponent/Circle' 

import './summary1stUser.css'

const Summary1EachCatogoryScore = ({categoryData}) => {
  

  return (
    <div className="summary1CatagoryAlignment">
                    <p>{categoryData?.categoryName}</p>
                    <Circle bgColor={"#C68977"} color={"#F9EEE1"} optionVal={categoryData?.answer?.score} diameter={"40px"} />
                    <Text type="a" href="#" className="links-text edit-in-summary" style={{color:"rgba(65, 65, 78, 0.60)",textAlign:'left'}}>
                        Edit
                    </Text>
                </div>
  )
}

export default Summary1EachCatogoryScore