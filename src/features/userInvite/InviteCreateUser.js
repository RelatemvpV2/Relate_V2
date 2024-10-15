import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Components
import Navbar from "../../components/Navbar/Navbar";
import RelateLogo from "../../components/relatelogo/Relatelogo";
import Button from "../../components/button/Button";
import MainContainer from "../../components/maincontainer/Maincontainer";
import Text from "../../components/text/Text";
import GreyBackground from "../../components/greybackground/Greybackground";
import '../startQuestionare/StartQuesPage';

//CSS
import "../auth/login.css";
import "./../../App.css";
import "./userInvite.css";


const InviteCreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    children: "",
    gender: "",
    partnerEmail: "",
    inviteLater: false, // Boolean to indicate whether to invite later
  });
  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRadioChange = (e) => {
    const value = e.target.value === "true"; // Convert string to boolean for radio buttons
    setFormData({
      ...formData,
      inviteLater: value, // Set inviteLater based on the selected radio option
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
    navigate("/startQuestionare/StartQuesPage");
    
   
  };

  return (
<MainContainer>
      <GreyBackground>
        <Navbar />

        <RelateLogo className="relate-logo-large"/>

        <div className="heading-container">
          <Text type="h3" className="heading-text">
            Help us get to know you and invite your partner
          </Text>
        </div>

        <div className="description-container">
          {/*  Text component for p */}
          <Text type="p" className="description-text">
            An email has been sent to you please find it and confirm your identity.
            
            To improve the quality of our help, we kindly ask you to provide some information about yourself.
            
            Next up, is to invite your partner to answer the survey questions.
          </Text>
        </div>

        <div className="links-textcontainer">
          {/*  Text component for a */}
          <Text type="a" href="#" className="links-text">
            I did not receive an email
          </Text>
        </div>
      </GreyBackground>

      <div className="sub-container">
        {/* You Section */}
        <div className="left-container">
          <div className="profile-container">
            <div className="sub-containerheading">
              {/*  Text component for h2 */}
              <Text type="h2" className="sub-containerheadingtext">
                You
              </Text>
            </div>

            <div className="user-inputscontainer">
              <form onSubmit={handleSubmit}>
                {/*  Text component for labels */}
                <Text type="label" htmlFor="firstName" className="labels">
                  First Name 
                </Text>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="inputboxes indent"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <Text type="label" htmlFor="lastName" className="labels">
                  Last Name 
                </Text>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="inputboxes indent"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <div className="inputs-container">
                  <div>
                    <Text type="label" htmlFor="dateofbirth" className="labels">
                      Date of birth
                    </Text>
                    <input
                      id="dateofbirth"
                      type="date"
                      name="dob"
                      className="dateinputbox"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Text type="label" htmlFor="children" className="labels">
                      Children
                    </Text>
                    <select
                      id="children"
                      name="children"
                      className="childinputbox"
                      value={formData.children}
                      onChange={handleChange}
                    >
                      <option value="">Please select</option>
                      <option value="none">None</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                </div>

                <Text type="label" htmlFor="gender" className="labels">
                  Gender
                </Text>
                <select
                  id="gender"
                  name="gender"
                  className="gender-inputbox"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Please select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className="dividercontainer">
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="308" viewBox="0 0 2 308" fill="none">
              <path d="M1 0V308" stroke="#41414E" />
            </svg>
          </div>
        </div>

        {/* Invite Partner Section */}
        <div className="right-container">
          <div className="invite-partner-container">
            <div className="sub-containerheading">
              {/*  Text component for h2 */}
              <Text type="h2" className="sub-containerheadingtext">
                Invite your partner
              </Text>
            </div>

            <div className="subcontainer-text">
              {/*  Text component for p */}
              <Text type="p" className="text">
                We will send an email to your partner, with the same 
                questionnaire. Lorem ipsum dolor sit amet consectetur adipiscing  elit. Ut eget nulla in nibh
                tempus bibendum non quis sapien. 
                Please type in your partner's email below.
              </Text>
            </div>

            <div className="invitePartner-container">
              {/*  Text component for label */}
              <Text type="label" htmlFor="email" className="labels">
                Email
              </Text>
              <input
                id="email"
                type="email"
                name="partnerEmail"
                className="inviteuser-inputbox indent"
                value={formData.partnerEmail}
                onChange={handleChange}
                disabled={formData.inviteLater}
              />
            </div>

            <div className="radiobut-container">
              <label>
                <input
                  type="radio"
                  className="radio-option"
                  name="inviteOption"
                  value="true"
                  checked={formData.inviteLater}
                  onChange={handleRadioChange}
                />
                {/*  Text component for span */}
                <Text type="span" className="radio-text">
                  I want to invite my partner later
                </Text>
              </label>
            </div>

            <div className="userpage-buttoncontainer">
              <Button className="userpage-button" type="submit" onClick={handleSubmit}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>

  );
};

export default InviteCreateUser;
