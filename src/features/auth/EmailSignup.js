// src/components/EmailSignup.js
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./login.css";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="email-signup">
      <div className="sub-containerheading">
        <h2 className="sub-containerheadingtext">I wish to create an account</h2>
      </div>
      <div className="subcontainer-text">
        <h3 className="text">
          Enter your email and create a new password
        </h3>
      </div>
      <div className="inputscontainer">
        <form onSubmit={handleSignup}>
          <label htmlFor="email" className="labels">
            Email
          </label>
          <input
            id="email"
            className="inputboxes"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className="labels">
            Create password. Must be 8 digits
          </label>
          <input
            id="password"
            className="inputboxes"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirmPassword" className="labels">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            className="inputboxes"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>

      <div className="policy-textcontainer">
        <p className="policy-text">
          By clicking ‘Create user’ you accept our{" "}
          <span className="legal-info">terms and conditions.</span>
          Learn how we use your data in our{" "}
          <span className="legal-info">privacy policy</span> and{" "}
          <span className="legal-info">cookie policy.</span>
        </p>
      </div>
      <div className="loginpage-buttoncontainer">
        <button className="loginpage-button">Create user </button>
      </div>
    </div>
  );
};

export default EmailSignup;
