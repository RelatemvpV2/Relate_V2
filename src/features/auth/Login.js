// src/components/Login.js
import React, { useState, useEffect } from "react";
import EmailSignup from "./EmailSignup";
import SocialLogin from "./SocialLogin";
import { auth } from "../../firebase/firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

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
      <header>
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Therapists</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <div className="login-container">
        <div className="login-left">
          <h2>I have an account</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <a href="/forgot-password">Forgot my password</a>
          </form>
        </div>

        <div className="signup-section">
          <EmailSignup />
          <div className="divider">or</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
