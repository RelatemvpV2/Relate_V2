import React from 'react'

import Text from '../text/Text'
import Circle from '../circleComponent/Circle' 

import './summary1stUser.css'

const Summary1EachCatogoryScore = () => {
  return (
    <div className="summary1CatagoryAlignment">
                    <p>{"Communication"}</p>
                    <Circle bgColor={"#C68977"} color={"#F9EEE1"} optionVal={"1"} diameter={"50px"} />
                    <Text type="a" href="#" className="links-text" style={{color:"rgba(65, 65, 78, 0.60)",textAlign:'left'}}>
                        Edit
                    </Text>
                </div>
  )
}

export default Summary1EachCatogoryScore