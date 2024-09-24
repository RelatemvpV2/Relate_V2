// src/components/Login.js
import React, { useState, useEffect } from "react";
import EmailSignup from "./EmailSignup";
import SocialLogin from "./SocialLogin";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import RelateLogo from "../../components/relatelogo/Relatelogo";
import Navbar from "../../components/Navbar";
import "./login.css";
import './../../App.css'
import Button from "../../components/button/Button";
import MainContainer from "../../components/maincontainer/Maincontainer";
import Text from "../../components/text/Text";
import GreyBackground from "../../components/greybackground/Greybackground";
import InputComponent from "../../components/inputs/InputComponent";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);



  const handleLogin=(e)=>{
    e.preventDefault();
    console.log("login")
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (user) {
    return (
      <div className="welcome-page">
        <h2>Welcome, {user.email}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
<MainContainer>
      <GreyBackground >
        <Navbar />
        <RelateLogo />

        <div className="login-container">
          <div className="heading-container">
            {/*  Text component for the heading */}
            <Text type="h3" className="heading-text">
              I have an account
            </Text>
          </div>

          <div className="logininputs-container">
            <form>
              <InputComponent
                className="logininput-box"
                type="email"
                placeholder="Email"
                value={email} // Bind the value to the state
            onChange={(e) => setEmail(e.target.value)} // Update the state on change
            required
              />
              <InputComponent
                className="logininput-box"
                type="password"
                placeholder="Password"
                value={password} // Bind the value to the state
            onChange={(e) => setPassword(e.target.value)} // Update the state on change
            required
              />
              <div className="loginpage-buttoncontainer">
                <Button
                  className="loginpage-button"
                  type="submit"
                  onClick={handleLogin} // Call handleLogin function
                >
                  Login
                </Button>
              </div>
            </form>

            <div className="links-textcontainer">
              {/*  Text component for the link */}
              <Text type="a" href="/forgot-password" className="links-text">
                I forgot my password
              </Text>
            </div>
          </div>
        </div>
      </GreyBackground>

      <div className="sub-container">
        <div className="left-container">
          <EmailSignup />
        </div>

        <div className="dividercontainer">
          <div className="divider">or</div>
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

        <div className="right-container">
          <SocialLogin />
        </div>
      </div>
    </MainContainer>

  );
};

export default Login;
