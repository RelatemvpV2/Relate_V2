
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Navbar from "../../components/Navbar/Navbar";
import RelateLogo from "../../components/relatelogo/Relatelogo";
import Button from "../../components/button/Button";
import MainContainer from "../../components/maincontainer/Maincontainer";
import Text from "../../components/text/Text";
import GreyBackground from "../../components/greybackground/Greybackground";
import "../startQuestionare/StartQuesPage";

// CSS
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

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    dob: false,
    
    gender: false,
    partnerEmail: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const handleRadioChange = (e) => {
    const value = e.target.value === "true"; // Convert string to boolean for radio buttons
    setFormData((prev) => ({
      ...prev,
      inviteLater: value, // Set inviteLater based on the selected radio option
      partnerEmail: value ? "" : prev.partnerEmail, // Clear email if inviting later
    }));
    setTouched((prev) => ({ ...prev, partnerEmail: false })); // Reset email touched state
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.dob) newErrors.dob = true;
    
    if (!formData.gender) newErrors.gender = true;
    if (!formData.inviteLater && (!formData.partnerEmail || !isValidEmail(formData.partnerEmail))) {
      newErrors.partnerEmail = true;
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setTouched({
        firstName: true,
        lastName: true,
        dob: true,
        // children: true,
        gender: true,
        partnerEmail: !formData.inviteLater ? true : false,
      });
    } else {
      navigate("/startQuestionare/StartQuesPage");
    }
  };

  return (
    <MainContainer>
      <GreyBackground>
        <Navbar />
        <RelateLogo className="relate-logo-large" />

        <div className="heading-container">
          <Text type="h3" className="heading-text">
            Help us get to know you and invite your partner
          </Text>
        </div>

        <div className="description-container">
          <Text type="p" className="description-text">
            An email has been sent to you, please find it and confirm your identity.
            To improve the quality of our help, we kindly ask you to provide some information about yourself.
            Next up, is to invite your partner to answer the survey questions.
          </Text>
        </div>

        <div className="links-textcontainer">
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
              <Text type="h2" className="sub-containerheadingtext">
                You
              </Text>
            </div>

            <div className="user-inputscontainer">
              <form onSubmit={handleSubmit}>
                <Text type="label" htmlFor="firstName" className="labels">
                  First Name{touched.firstName && !formData.firstName && <span className="error-asterisk">*</span>}
                </Text>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className={`inputboxes indent ${touched.firstName && !formData.firstName ? "input-error" : ""}`}
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />

                <Text type="label" htmlFor="lastName" className="labels">
                  Last Name{touched.lastName && !formData.lastName && <span className="error-asterisk">*</span>}
                </Text>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className={`inputboxes indent ${touched.lastName && !formData.lastName ? "input-error" : ""}`}
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />

                <div className="inputs-container">
                  <div>
                    <Text type="label" htmlFor="dob" className="labels">
                      Date of Birth{touched.dob && !formData.dob && <span className="error-asterisk">*</span>}
                    </Text>
                    <input
                      id="dob"
                      type="date"
                      name="dob"
                      className={`dateinputbox ${touched.dob && !formData.dob ? "input-error" : ""}`}
                      value={formData.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
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
                  Gender{touched.gender && !formData.gender && <span className="error-asterisk">*</span>}
                </Text>
                <select
                  id="gender"
                  name="gender"
                  className={`gender-inputbox ${touched.gender && !formData.gender ? "input-error" : ""}`}
                  value={formData.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
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
              <Text type="h2" className="sub-containerheadingtext">
                Invite your partner
              </Text>
            </div>

            <div className="subcontainer-text">
              <Text type="p" className="text">
                We will send an email to your partner with the same questionnaire. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eget nulla in nibh tempus bibendum non quis sapien.
                Please type in your partner's email below.
              </Text>
            </div>

            <div className="invitePartner-container">
              <Text type="label" htmlFor="email" className="labels">
                Email{touched.partnerEmail && !formData.partnerEmail && <span className="error-asterisk">*</span>}
              </Text>
              <input
                id="email"
                type="email"
                name="partnerEmail"
                className={`inviteuser-inputbox indent ${touched.partnerEmail && (!formData.partnerEmail || !isValidEmail(formData.partnerEmail)) ? "input-error" : ""}`}
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
