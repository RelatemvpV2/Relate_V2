// src/components/Login.js

import React, { useState, useEffect } from "react";
import '../userInvite/InviteCreateUser'
//firebase
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
//navigation
import { useNavigate } from "react-router-dom";
//components
import RelateLogo from "../../components/relatelogo/Relatelogo";
import Navbar from "../../components/Navbar";
import Button from "../../components/button/Button";
import MainContainer from "../../components/maincontainer/Maincontainer";
import Text from "../../components/text/Text";
import GreyBackground from "../../components/greybackground/Greybackground";
import InputComponent from "../../components/inputs/InputComponent";
import { loginUser } from "./authServices";
import EmailSignup from "./EmailSignup";
import SocialLogin from "./SocialLogin";
//css
import "./login.css";
import './../../App.css'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in through Firebase");
  
      // GraphQL Login
      const response = await loginUser(email, password); // Call the GraphQL login service
      console.log("GraphQL response:", response); // Log GraphQL response for debugging
  
      if (response.success) {
        // If GraphQL login is successful, store the token
        localStorage.setItem("token", response.token);
        console.log("Token stored in localStorage:", response.token); // Log the token to confirm it's stored
        navigate("/userInvite/InviteCreateUser")
  
        // Handle successful login (e.g., redirect, store token, etc.)
      } else {
        setError("Login failed. Please try again.");
        console.log("GraphQL login failed.");
      }
  
    } catch (error) {
      if (error.code) {
        // Firebase specific error handling
        setError(error.message); // Firebase login error
        console.log("Firebase login error:", error.message); // Log Firebase error
      } else {
        // GraphQL error handling
        setError("Failed to login user with GraphQL: " + error.message);
        console.log("GraphQL login error:", error.message); // Log GraphQL error
      }
    }
  };
  
  


  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     localStorage.removeItem("token")
  //     console.log("User signed out");
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };

  // if (user) {
  //   return (
  //     <div className="welcome-page">
  //       <h2>Welcome, {user.email}</h2>
  //       <button onClick={handleLogout}>Logout</button>
  //     </div>
  //   );
  // }

  return (
    <MainContainer>
      <GreyBackground >
        <Navbar />
        <RelateLogo className="relate-logo-large"/>

        <div className="login-container">
          <div className="heading-container">
            {/*  Text component for the heading */}
            <Text type="h3" className="heading-text">
              I have an account
            </Text>
          </div>

          <div className="logininputs-container">
                 
            <form onClick={handleLogin} >

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
                >
                  Login
                </Button>

              </div>
              {/* Display error message */}
              {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>}
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
          <div className="divider-Or">or</div>
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
