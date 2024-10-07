// src/components/EmailSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import InputComponent from "../../components/inputs/InputComponent";
import { registerUser } from "./authServices";



const EmailSignup = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true); 
  
    try {
      // Option 1: Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully with Firebase");
  
      // After successful Firebase signup, proceed to GraphQL registration
      const { success, responseData } = await registerUser(email, password); // Call the GraphQL registration service
  
      if (success) {
        console.log("User signed up successfully with GraphQL", responseData);
        navigate("/userInvite/InviteCreateUser"); 
        // Handle successful signup (e.g., redirect, store token, etc.)
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      // Check if the error is from Firebase or GraphQL
      if (error.code) {
        // Firebase specific error handling
        setError(error.message); // Firebase signup error
      } else {
        // GraphQL error handling
        setError("Failed to register user with GraphQL: " + error.message);
      }
    }
    finally {
      setLoading(false); // Stop loader
    }
  };
  
  

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
            Email
          </Text>
          <InputComponent
            id="email"
            className="inputboxes"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Text type="label" htmlFor="password" className="labels">
            Create password. Must be 8 digits
          </Text>
          <InputComponent
            id="password"
            className="inputboxes"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Text type="label" htmlFor="confirmPassword" className="labels">
            Confirm password
          </Text>
          <InputComponent
            id="confirmPassword"
            className="inputboxes"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Display error message */}
          {error && <Text style={{ color: "red" }}>{error}</Text>}
        </form>
      </div>

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

      <div className="loginpage-buttoncontainer">
       
        <Button className="loginpage-button" type="submit" onClick={handleSignup}>
          Create user
        </Button>
      </div>
    </div>
  ); 
};

export default EmailSignup;
