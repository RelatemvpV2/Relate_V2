// src/components/Login.js
import React, { useState, useEffect } from "react";
import EmailSignup from "./EmailSignup";
import SocialLogin from "./SocialLogin";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import RelateLogo from "../../components/Relatelogo";
import Navbar from "../../components/Navbar";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState(null);

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
    <div className="login-page">
      <div className="login-left">
        <Navbar />

        <RelateLogo />

        <div className="login-container">
          <div className="login-textcontainer">
            <h3 className="login-text">I have an account</h3>
          </div>

          <div className="logininputs-container">
            <form>
              <input
                className="logininput-box"
                type="email"
                placeholder="Email"
              />
              <input
                className="logininput-box"
                type="password"
                placeholder="Password"
              />
              <div className="login-buttoncontainer">
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="forgotpassword-textcontainer">
              <a className="forgotpassword-text" href="/forgot-password">
                I forgot my password
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="signup-section">
        <div className="email-signupcontainer">
          <EmailSignup />
        </div>
        <div className="dividercontainer">
          <div className="divider">or</div>
          <div class="svg-container">
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

        <div className="social-logincontainer">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
