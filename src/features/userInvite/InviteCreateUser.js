import React, { useState } from "react";
import "../auth/login.css";
import Navbar from "../../components/Navbar";
import RelateLogo from "../../components/Relatelogo";
import './../../App.css'

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
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="main-container">
      <div className="upper-container">
        <Navbar />

        <RelateLogo />
        <div className="heading-container">
          <h1 className="heading-text">
            Help us get to know you and <br />  invite your partner
          </h1>
        </div>
        <div className="description-container">
          <p className="description-text">
            An email has been sent to you please find it and confirm your
            identity. <br /> To improve the quality of our help, we kindly ask
            you to provide some information about yourself.
            <br /> Next up, is to invite your partner to answer the survey
            questions.
          </p>
        </div>

        <div className="links-textcontainer">
          <a className="links-text" href="#">
            I did not receive an email
          </a>
        </div>
      </div>

      <div className="sub-container">
        {/* You Section */}
        <div className="left-container" >
        <div className="email-signup">
          <div className="sub-containerheading">
            <h2 className="sub-containerheadingtext">You</h2>
          </div>
          <div className="inputscontainer">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName" className="labels">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="inputboxes"
                value={formData.firstName}
                onChange={handleChange}
              />
              <label htmlFor="lastName" className="labels">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="inputboxes"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className="inputs-container">
                <div>
                  <label htmlFor="dateofbirth" className="labels">
                    Date of birth
                  </label>

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
                  <label htmlFor="children" className="labels">
                    Children
                  </label>
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

              <label htmlFor="gender" className="labels">
                Gender
              </label>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="308"
              viewBox="0 0 2 308"
              fill="none"
            >
              <path d="M1 0V308" stroke="#41414E" />
            </svg>
          </div>
        </div>

        {/* Invite Partner Section */}
        <div className="right-container">
        <div className="social-login">
          <div className="sub-containerheading">
            <h2 className="sub-containerheadingtext">Invite your partner</h2>
          </div>
          <div className="subcontainer-text">
            <p className="text">
              We will send an email to your partner, with the same <br />
              questionnaire. Lorem ipsum dolor sit amet consectetur 
              adipiscing <br /> elit. Ut eget nulla in nibh tempus bibendum non quis
              sapien. <br />
              Please type in your partners email below.
            </p>
          </div>

          <div>
            <label htmlFor="email" className="labels">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="partnerEmail"
              className="inviteuser-inputbox"
              value={formData.partnerEmail}
              onChange={handleChange}
              disabled={formData.inviteLater} // Disable email input if "invite later" is selected
            />
          </div>

          <div  className="radiobut-container">
            <label>
              <input
                type="radio"
                className="radio-option"
                name="inviteOption"
                value="true"
                checked={formData.inviteLater}
                onChange={handleRadioChange}
              />
             <span className="radio-text"> I want to invite my partner later</span> 
            </label>
          </div>
          <div className="userpage-buttoncontainer">
            <button
              className="userpage-button"
              type="submit"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default InviteCreateUser;
