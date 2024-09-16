// src/components/SocialLogin.js
import React from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  microsoftProvider,
  linkedinProvider,
} from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faMicrosoft,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialLogin = () => {
  const handleLogin = async (provider) => {
    try {
      // For Google, prompt account selection
      if (provider === googleProvider) {
        provider.setCustomParameters({
          prompt: "select_account", // Force account selection
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
      <div className="label-container">
        <h3 className="registration-title">Login using platforms</h3>
      </div>

      <div className="account-textcontainer">
        <p className="account-text">Use an already existing account</p>
      </div>
      <div className="socialsignup-buttoncontainer">
        <button
          className="social-button"
          onClick={() => handleLogin(googleProvider)}
        >
          <FontAwesomeIcon className="social-icongoogle" icon={faGoogle} />
          <div className="social-text">
            <span>Google</span>
          </div>
        </button>

        <button
          className="social-button"
          onClick={() => handleLogin(facebookProvider)}
        >
          <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          <div className="social-text">
            <span>Facebook</span>
          </div>
        </button>

        <button
          className="social-button"
          onClick={() => handleLogin(microsoftProvider)}
        >
          <FontAwesomeIcon className="social-icon" icon={faMicrosoft} />
          <div className="social-text">
            <span>Microsoft</span>
          </div>
        </button>

        <button
          className="social-button"
          onClick={() => handleLogin(linkedinProvider)}
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          <div className="social-text">
            <span> LinkedIn</span>
          </div>
        </button>
      </div>

      <div className="policy-textcontainer">
        <p className="policy-text">
          When signing in you accept our{" "}
          <span
            className="legal-info
"
          >
            terms and conditions.
          </span>
          Learn how we use your data in our{" "}
          <span className="legal-info">privacy policy</span> and{" "}
          <span className="legal-info">cookie policy.</span>
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
