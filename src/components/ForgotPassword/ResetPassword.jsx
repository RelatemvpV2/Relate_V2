import React, { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import { useNavigate, useLocation } from "react-router-dom";


//js 
import { resetPassword } from '../../services/api/userAuthApi';
//components
import MainContainer from '../maincontainer/Maincontainer'
import GreyBackground from '../greybackground/Greybackground'
import Navbar from '../Navbar/Navbar'
import RelateLogo from '../relatelogo/Relatelogo'
import Text from '../text/Text'
import Button from '../button/Button'
import Loader from '../loader/Loader'
import InputComponent from '../inputs/InputComponent'
import PopUpComponent from '../popUp/PopUpComponent';


const ResetPassword = () => {

  const [newPassword, setNewPassword] = useState("")
  const [newConfirmPassword, setNewConfirmPassword] = useState("")
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [errors, setErrors] = useState({})

  const [isDialogOpen, setDialogOpen] = useState(false);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);

  const navigate = useNavigate()

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);

    if (!isDialogOpen && buttonRef.current && dialogRef.current) {
      createPopper(buttonRef.current, dialogRef.current, {
        placement: 'bottom',
      });
    }
  };


  const validatePassword = (password) => {
    const validationErrors = {};

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      validationErrors.uppercase = 'Password must contain at least one uppercase letter.';
    }

    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      validationErrors.lowercase = 'Password must contain at least one lowercase letter.'
    }

    // At least one number
    if (!/[0-9]/.test(password)) {
      validationErrors.number = 'Password must contain at least one number.';
    }

    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      validationErrors.specialChar = 'Password must contain at least one special character.';
    }

    // Minimum 8 characters
    if (password.length < 8) {
      validationErrors.length = 'Password must be at least 8 characters long.';
    }
    return validationErrors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
     // Validate password on change
     setErrors(validatePassword(newPassword));
  };

  const handleSubmitNewPassword = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length !== 0) {
      toggleDialog();
     }

    if (newPassword !== newConfirmPassword) {
      setError("Passwords do not match");
      toggleDialog();
      return;
    }
    if (newPassword === "" || newConfirmPassword === "") {
      setError("Please fill the fields with your new password")
      toggleDialog();
      return;
    }


    setLoading(true);

    try {
      const response = await resetPassword({newPassword},token);
       // Call the API function
      setMsg(response.data.message); // Set success message
      toggleDialog();

    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An unexpected error occurred.";
      // setError("Failed to reset your password: " + error);
      navigate(`/reset-password?token=${token}`);
      setError(`Failed to reset your password: ${errorMessage}`);
      toggleDialog();
    } finally {
      setLoading(false); // Stop loader
    }
  }

  return (
    <MainContainer style={{ height: "100vh", position: "relative" }}>
      <GreyBackground style={{ position: 'fixed', top: 0 }}>
        <Navbar />
        <RelateLogo className="relate-logo-large" />
        {/* Show Loader when loading is true */}
        {loading && <Loader />}

        {isDialogOpen && <PopUpComponent buttonRef={buttonRef} dialogRef={dialogRef} text={msg} error={error} toggleDialog={toggleDialog} />}
        <div className={`login-container ${loading || isDialogOpen ? "blurred-content" : ""}`} style={{ margin: "50px auto" }}>
          {/* Show Loader when loading is true */}


          {/* Apply blur effect when loading */}
          <div className={loading ? "blurred-content" : ""}>
            <div className="heading-container">
              <Text type="h3" className="heading-text">
                Create new password
              </Text>
            </div>

            <div className="logininputs-container">
              <form onSubmit={handleSubmitNewPassword}>  {/* Changed from onClick to onSubmit */}
                <InputComponent
                  className="logininput-box"
                  type="password"
                  placeholder="New password (Must be 8 digits)"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <InputComponent
                  className="logininput-box"
                  type="password"
                  placeholder="Confirm new password"
                  value={newConfirmPassword}
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                  required
                />

                <div className="loginpage-buttoncontainer" style={{ margin: "0 auto 100px" }}>
                  <Button className="loginpage-button" type="submit">
                    Save and Login
                  </Button>
                </div>
                {msg && <>
                 {/*  <Text style={{ color: 'green' }}>{msg}</Text> */}
                  <a href="/Login">go to Login</a>
                </>}
               
              </form>


            </div>
          </div>
        </div>
      </GreyBackground>
    </MainContainer>
  );
}

export default ResetPassword