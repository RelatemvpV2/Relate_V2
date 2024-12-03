// src/components/EmailSignup.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api/userAuthApi";

//components
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import InputComponent from "../../components/inputs/InputComponent";

import PopUpComponent from "../../components/popUp/PopUpComponent";

//css
import "./login.css";

const EmailSignup = ({ setLoading, toggleDialog, msg, setMsg, error, setError, buttonRef,dialogRef}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  /* const [error, setError] = useState(""); */
  const [isInputValid, setIsInputValid] = useState(true);
  const [errors, setErrors] = useState({});
  /*  const [msg, setMsg] = useState("") */
  const [submitted, setSubmitted] = useState(false);


  const validateInput = () => {
    // Check if the fields are filled and passwords match
    const isValid = email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "";
    setIsInputValid(isValid);
    return isValid;
  };

  const handleInputChange = (field, value) => {
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);

    // Validate input on change
    validateInput();
  };

  const validatePassword = (password) => {
    let validationErrors = "";

    // At least one uppercase letter
    const hasAtleastOneUpperChar= /[A-Z]/.test(password);
    if (!hasAtleastOneUpperChar) {
      validationErrors = 'Password must contain at least one uppercase letter.';
    }

    // At least one lowercase letter
    const hasAtleastOneSmallChar= /[a-z]/.test(password);
    if (!hasAtleastOneSmallChar) {
      validationErrors = 'Password must contain at least one lowercase letter.'
    }

    // At least one number
    const hasNumber= /[0-9]/.test(password);
    if (!hasNumber) {
      validationErrors = 'Password must contain at least one number.';
    }

    // At least one special character
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialCharacter) {
      validationErrors= 'Password must contain at least one special character.';
    }

    // Minimum 8 characters
    if (password.length < 8) {
      validationErrors = 'Password must be at least 8 characters long.';
    }
    return validationErrors;
  };


  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password on change
    setErrors(validatePassword(newPassword));
  };

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    
    e.preventDefault();
    setSubmitted(true);

    if (!validateInput()) {
      setError("Invalid input");
      toggleDialog();
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toggleDialog();
      return;
    }
    if(validatePassword(password)){
      setError(JSON.stringify(validatePassword(password)));
      toggleDialog();
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser({ email, password }); // Call the API function
      toggleDialog();
      setMsg(response.data.message); // Set success message
      navigate('/Login');

    } catch (error) {
      setError("Failed to sign up: " + error.response.data.message);
      toggleDialog();
      navigate('/Login');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    clearInputFields()
  }, [error, msg])

  return (
    <div className="email-signup">

      <div className="sub-containerheading">
        {/* Text component for heading */}
        <Text type="h2" className="sub-containerheadingtext">
          I wish to create an account
        </Text>
      </div>

      <div className="subcontainer-text">
        {/*  Text component for subheading */}
        <Text type="h3" className="text">
          Enter your email and create a new password
        </Text>
      </div>

      <div className="inputscontainer">
        <form onSubmit={handleSignup}>
          {/*  Text component for labels */}
          <Text type="label" htmlFor="email" className="labels">
            <span className="label-text">
              Email{submitted && email.trim() === "" && <span className="error-asterisk">*</span>}
            </span>


          </Text>
          <InputComponent
            id="email"
            className={`inputboxes indent ${!isInputValid && email.trim() === "" ? "input-error" : ""}`}
            type="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />

          <Text type="label" htmlFor="password" className="labels">
            <span className="label-text">
              Create password. Must be 8 digits{submitted && password.trim() === "" && <span className="error-asterisk">*</span>}
            </span>
          </Text>
          <InputComponent
            id="password"
            className={`inputboxes indent ${!isInputValid && password.trim() === "" ? "input-error" : ""}`}

            type="password"
            value={password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />

          <Text type="label" htmlFor="confirmPassword" className="labels">
            <span className="label-text">
              Confirm password{submitted && confirmPassword.trim() === "" && <span className="error-asterisk">*</span>}
            </span>
          </Text>
          <InputComponent
            id="confirmPassword"
            className={`inputboxes indent ${!isInputValid && confirmPassword.trim() === "" ? "input-error" : ""}`}

            type="password"
            value={confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            required
          />



          <div className="policy-textcontainer">
            {/* component for policy paragraph */}
            <Text type="p" className="policy-text">
              By clicking ‘Create user’ you accept our{" "}
              <span className="legal-info">terms and conditions.</span> Learn how we
              use your data in our{" "}
              <span className="legal-info">privacy policy</span> and{" "}
              <span className="legal-info">cookie policy</span>.
            </Text>
          </div>

          <div className="loginpage-buttoncontainer create-user">

            <Button className="loginpage-button" type="submit" ref={buttonRef}>
              Create user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSignup;
