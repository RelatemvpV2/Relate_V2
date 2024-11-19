
import React, { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import '../userInvite/InviteCreateUser';

//navigation
import { useNavigate } from "react-router-dom";

//components
import RelateLogo from "../../components/relatelogo/Relatelogo";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/Button";
import MainContainer from "../../components/maincontainer/Maincontainer";
import Text from "../../components/text/Text";
import GreyBackground from "../../components/greybackground/Greybackground";
import InputComponent from "../../components/inputs/InputComponent";
import EmailSignup from "./EmailSignup";

import SocialLogin from "./SocialLogin";
import { LoginUser, setUserToken } from "../../utils/userApi";
import { getUserById, userLogin } from "../../services/api/userAuthApi"


// Loader component
import Loader from "../../components/loader/Loader";

//css
import "./login.css";
import './../../App.css';
import PopUpComponent from "../../components/popUp/PopUpComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("")

  const [isDialogOpen, setDialogOpen] = useState(false);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);

  const navigate = useNavigate();

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
  }
  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);

    if (!isDialogOpen && buttonRef.current && dialogRef.current) {
      createPopper(buttonRef.current, dialogRef.current, {
        placement: 'bottom',
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailValid = email.trim() !== "";
    const passwordValid = password.trim() !== "";
    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);

    // If either field is invalid, stop here
    if (!emailValid || !passwordValid) {
      setLoading(false);
      return; // Prevent navigation if inputs are invalid
    }

    try {
      const payload = {
        email: email,
        password: password,
        role: 'user', // Default role
      };
      const response = await userLogin(payload);
      setUserToken("token", response.data.token)
      window.localStorage.setItem("email", email);

      const savedEmail = window.localStorage.getItem("email");
      const userId = response.data.user_id;
      const userResponse = await getUserById(userId);
      if (userResponse.data.full_name === null && userResponse.data.date_of_birth === null) {
        navigate("/userInvite/InviteCreateUser");
      } else {
        navigate("/dashboard"); 
      }
      
    } 
    catch (err) {
      // Only set the error message, not the entire error object
      setError(err.message || "Failed to login, please try again.");
      toggleDialog();


    } finally {
      setLoading(false);//stop loader
    }
  };

  useEffect(() => {
    clearInputFields()

  }, [error, msg])

  useEffect(() => {
    window.localStorage.setItem("token", "")
  })

  return (
    <MainContainer>
      <GreyBackground>
        <Navbar />
        <RelateLogo className="relate-logo-large" />

        {/* Show Loader when loading is true */}
        {loading && <Loader />}

        <div className="login-container">

          {/* Apply blur effect when loading */}
          <div className={loading || isDialogOpen ? "blurred-content" : ""}>
            <div className="heading-container">
              <Text type="h3" className="heading-text">
                I have an account
              </Text>
            </div>

            <div className="logininputs-container">
              <form onSubmit={handleLogin}>  {/* Changed from onClick to onSubmit */}
                <InputComponent
                  className={`logininput-box ${!isEmailValid ? "input-error" : ""}`}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(e.target.value.trim() !== ""); // Validate on change
                  }}
                  required
                />
                <InputComponent
                  className={`logininput-box ${!isPasswordValid ? "input-error" : ""}`}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsPasswordValid(e.target.value.trim() !== ""); // Validate on change
                  }}
                  required
                />


                <div className="loginpage-buttoncontainer">
                  <Button className="loginpage-button" type="submit">
                    Login
                  </Button>
                </div>
                {/* Display error message */}
                {/*  {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>} */}
              </form>

              <div className="links-textcontainer">
                <Text type="a" href="/forgot-password" className="links-text darkBgStyles">
                  I forgot my password
                </Text>
              </div>

            </div>
          </div>
        </div>
      </GreyBackground>
      {isDialogOpen && <PopUpComponent buttonRef={buttonRef} dialogRef={dialogRef} text={msg} error={error} toggleDialog={toggleDialog} />}


      <div className={loading || isDialogOpen ? "sub-container blurred-content" : "sub-container"}>
        <div className="left-container">
          <EmailSignup setLoading={setLoading}
            toggleDialog={toggleDialog} msg={msg} setMsg={setMsg} error={error} setError={setError} />
        </div>

        <div className="dividercontainer">
          <div className="divider-Or">or</div>
          <div className="svg-container hidden-xs">
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

        <div className="right-container">
          <SocialLogin />
        </div>
      </div>
    </MainContainer>
  );
};


export default Login;
