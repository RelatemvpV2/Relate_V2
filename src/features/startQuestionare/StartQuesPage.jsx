import React, { useState, useEffect } from 'react';
/* import '../assessment/Assessment'; */
import { useNavigate } from 'react-router-dom';


//components
import MainContainer from '../../components/maincontainer/Maincontainer';
import GreyBackground from '../../components/greybackground/Greybackground';
import Navbar from '../../components/Navbar/Navbar';
import RelateLogo from '../../components/relatelogo/Relatelogo';
import Text from '../../components/text/Text';
import Button from '../../components/button/Button';
import LogoutButton from '../../components/logout/Logout';

//js
import { getPartnerEmail } from '../../services/api/userAuthApi';

//css
import './startQuesPage.css'



const StartQuesPage = () => {


  const [partnerEmail, setPartnerEmail] = useState("");

  //get email of the partner and display

  const navigate = useNavigate(); // Step 2

  const email = window.localStorage.getItem("email");
  const activeRelation = JSON.parse(window.localStorage.getItem("active_relation"));
  const userEmail = window.localStorage.getItem("email");

  // Determine the partner's email
  const activePartnerEmail = 
      activeRelation.user_invited_email === userEmail 
          ? activeRelation.sender_email 
          : activeRelation.reciever_email;
  

  const handleGetStarted = () => {
    if (partnerEmail || activePartnerEmail) {
      console.log(activePartnerEmail)
      navigate('/assessment/Assessment'); // Navigate to Assessment page if partnerEmail exists
    } else {
      navigate('/dashboard');
    }

  };
  const PartnerEmail = async () => {
    try {
      const response = await getPartnerEmail();
      

      setPartnerEmail(activePartnerEmail)

      const matchRightPartner = response.data.filter((partner)=>partner.reciever_email === activePartnerEmail)
    
      sessionStorage.setItem('current_assesment_id', matchRightPartner[0].assessment_id)

      //checking if the login is same as receiver
    /*   if (email === response.data[0]["reciever_email"]) {
        setPartnerEmail(response.data[0]["sender_email"])
      }
      else {
        setPartnerEmail(response.data[0]["reciever_email"])
      } */

    }
    catch (error) {
      console.log("error in getting partner", error)
    }
    finally {
    }

  }

  useEffect(() => {
    PartnerEmail();
  }, [])


  return (
    <MainContainer style={{ paddingBottom: "30vh" }}>
      <GreyBackground >
        <div className='d-flex justify-content-between'>
          <Navbar />
          <LogoutButton />

        </div>


        <RelateLogo className="relate-logo-large" />
        <div className="heading-container">
          {/*  Text component for h1 */}
          <Text type="h3" className="heading-text h3">
            Well done and welcome
          </Text>
          <Text type="p" className="description-text">
            You have taken the first step to improve your relation and you and your partners
            answers will help us guide you in the best way.
          </Text>
        </div>
        <div className='invite-partner-remainder'>
          {partnerEmail ? <>
            <Text type="p" className="description-text" style={{ marginBottom: 0 }}>
              An invitation has been sent to:
            </Text>
            <Text type="p" className="username-text">
              {partnerEmail}
            </Text>
          </>
            :
            <Text className="description-text">– so do not forget to invite your partner later. </Text>

          }
        </div>





      </GreyBackground>
      <div className='startques-container'>
        <div className="sub-containerheading">
          {/* Text component for heading */}
          <Text type="h3" className="heading-text h3" style={{ color: "#41414E", margin: 0 }}>
            Next: Start your journey
          </Text>
        </div>

        <div className="subcontainer-text">
          {/*  Text component for subheading */}
          <Text type="p" className="description-text" style={{ color: "#41414E", margin: "20px auto" }}>
            We will take you through 9 different categories, each containing a question. After submitting your  answers we will match the answers with your partners, and help you identify focus areas. When you’re done, your answers will be shown in your personal dashboard.

          </Text>
          <div className="startques-buttoncontainer">
            <Button className="userpage-button" type="submit" onClick={handleGetStarted} >
              Get started
            </Button>
          </div>
        </div>
      </div>








    </MainContainer>
  );
};



export default StartQuesPage;


