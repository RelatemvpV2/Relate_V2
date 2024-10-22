import React from 'react'

import Text from '../text/Text';
import DashboardLayout from '../dashboardLayout/DashboardLayout';
import Catagory from '../catagory/Catagory';
import Circle from '../circleComponent/Circle';
import Summary1EachCatogoryScore from './Summary1EachCatogoryScore';

//css
import './summary1stUser.css';
import Button from '../button/Button';

const Summary1stUser = () => {
    return (
        <DashboardLayout>
            <Text type="h3" className='quesionaire-heading h3' >My relation with</Text>
            <Text className='questionaire-partnerName '>James Samuelson</Text>

            {/* Divider */}
            <div className="divider-horizantal"></div>

            <Text type="p" className="text questionaire-relation-review">Relation review</Text>
            <Text type="p" className="text">Your Summary</Text>


            {/* Divider */}
            <div className="divider-horizantal"></div>

            <Text type="p" className="text">First step completed in improving your relation. Here are your answers:</Text>
            <Catagory width={'400px'}>
                <div className="summary1CatagoryAlignment" style={{ height: '100%' }}>
                    <p >Overall relation</p>
                    <Circle bgColor={"#C68977"} color={"#F9EEE1"} optionVal={"1"} diameter={"50px"} />
                    <Text type="a" href="#" className="links-text" style={{ color: "rgba(65, 65, 78, 0.60)", textAlign: "left" }}>
                        Edit
                    </Text>
                </div>
            </Catagory>

            <p className='summary-catagories-p'>Catagories</p>

            {/* Divider */}
            <div className="divider-horizantal" style={{ width: "400px", marginTop: 0 }}></div>

            {/* loop this component with catogories and the scores of the each catagory */}
            <Summary1EachCatogoryScore />
            <Summary1EachCatogoryScore />

            <Summary1EachCatogoryScore />
            <Summary1EachCatogoryScore />

            <Summary1EachCatogoryScore />




            <p> need to loop the same component for all catogories with their scores.</p>

            {/* Divider */}
            <div className="divider-horizantal" style={{ width: "400px" }}></div>

            <Button className='loginpage-button'>Continue</Button>
            <div className="links-textcontainer">
                {/*  Text component for the link */}
                <Text type="a" href="/" className="links-text" style={{ fontSize: "12px" }}>
                    Go back
                </Text>
            </div>

        </DashboardLayout>
    )
}

export default Summary1stUser