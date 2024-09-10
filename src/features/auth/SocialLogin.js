// src/components/SocialLogin.js
import React from "react";
import { auth, googleProvider, facebookProvider, microsoftProvider, linkedinProvider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const SocialLogin = () => {
  const handleLogin = async (provider) => {
    try {
      // For Google, prompt account selection
      if (provider === googleProvider) {
        provider.setCustomParameters({
          prompt: 'select_account' // Force account selection
        });
      }
      
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="social-login">
      <h3>Login using platforms</h3>
      <button onClick={() => handleLogin(googleProvider)}>Google</button>
      <button onClick={() => handleLogin(facebookProvider)}>Facebook</button>
      <button onClick={() => handleLogin(microsoftProvider)}>Microsoft</button>
      <button onClick={() => handleLogin(linkedinProvider)}>LinkedIn</button>
    </div>
  );
};

export default SocialLogin;
