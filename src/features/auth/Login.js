import React, { useState } from "react";
import '../userInvite/InviteCreateUser';

//firebase
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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

// Loader component
import Loader from "../../components/loader/Loader"; 
 
//css
import "./login.css";
import './../../App.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
     /*  // Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in through Firebase");
      */

      // Navigate after successful login
      navigate("/startQuestionare/StartQuesPage");

    } catch (error) {
      setError("Failed to login user: " + error.message);
      console.log("Login error:", error.message);  // Log generic login error
    } finally {
      setLoading(false); 
    }
};


  return (
    <MainContainer>
      <GreyBackground>
        <Navbar />
        <RelateLogo className="relate-logo-large" />
        {loading && <Loader />}

        <div className="login-container">
          {/* Show Loader when loading is true */}
          
          
          {/* Apply blur effect when loading */}
          <div className={loading ? "blurred-content" : ""}>
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
                {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>}
              </form>

              <div className="links-textcontainer">
                <Text type="a" href="/forgot-password" className="links-text">
                  I forgot my password
                </Text>
              </div>
            </div>
          </div>
        </div>
      </GreyBackground>
      

      <div className={loading ? "sub-container blurred-content" : "sub-container"}>
        <div className="left-container">
          <EmailSignup setLoading={setLoading}  />
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
