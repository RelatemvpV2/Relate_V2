// src/components/Login.js
import React, { useState, useEffect } from "react";
//firebase
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
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
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [firebaseSuccess, setFireBaseSuccess] = useState(false);
  const [graphqlSuccess, setGraphqlSuccess] = useState(false);



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user signed in through firebase")
      // After successful Firebase signin, proceed to GraphQL login
      const response = await loginUser(email, password); // Call the GraphQL login service

      if (response.success) {
        /*   console.log("User logged in successfully with GraphQL", response); */
        localStorage.setItem("token", response.token)
        // Handle successful signup (e.g., redirect, store token, etc.)
      }
      else {
        setError("Login failed. Please try again.");
      }

    }
    catch (error) {
      // Check if the error is from Firebase or GraphQL
      if (error.code) {
        // Firebase specific error handling
        setError(error.message); // Firebase signin error
      } else {
        // GraphQL error handling
        setError("Failed to Login user with GraphQL: " + error.message);
      }
    }
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
      localStorage.removeItem("token")
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
