import React from 'react';
import '../assessment/Assessment';
import { useNavigate } from 'react-router-dom'; 
import MainContainer from '../../components/maincontainer/Maincontainer';
import GreyBackground from '../../components/greybackground/Greybackground';
import Navbar from '../../components/Navbar';

import RelateLogo from '../../components/relatelogo/Relatelogo';
import Text from '../../components/text/Text';
import Button from '../../components/button/Button';


const StartQuesPage = () => {

  const navigate = useNavigate(); // Step 2

  const handleGetStarted = () => {
      navigate('/assessment/Assessment'); // Step 3 - Update the path to your Assessment page route
  };
    return (
        <MainContainer>
            <GreyBackground>
            <Navbar />

<RelateLogo />
<div className="heading-container">
          {/*  Text component for h1 */}
          <Text type="h1" className="heading-text">
          Well done and welcome
          </Text>
          <Text type="p" className="description-text">
          You have taken the first step to improve your relation and you and your partners <br/>
          answers will help 5us guide you in the best way.
          </Text>
        </div>
        <div className='description-container'>
        <Text type="p" className="description-text">
        An invitation has been sent to:
          </Text>
          <Text type="p" className="username-text">
          firstnamelastname@mail.com
          </Text>

             
        </div>
        

      
            </GreyBackground>
<div className='startques-container'>
<div className="sub-containerheading">
        {/* Text component for heading */}
        <Text type="h2" className="sub-containerheadingtext">
        Next: Start your journey
        </Text>
      </div>

      <div className="subcontainer-text">
        {/*  Text component for subheading */}
        <Text type="h3" className="text">
        We will take you through 9 different categories, each containing a question. After submitting your <br/> answers we will match the answers with your partners, and help you identify focus areas.<br/> When you’re done, your answers will be shown in your personal dashboard.

        </Text>
        <div className="startques-buttoncontainer">
              <Button className="userpage-button" type="submit"  onClick={handleGetStarted} >
              Get started
              </Button>
            </div>
      </div>
</div>
            
        

          

            
        

        </MainContainer>
    );
};



export default StartQuesPage;
