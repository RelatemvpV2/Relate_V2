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

import Text from "../../components/text/Text";

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
      console.log("User signed in!");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
<div className="social-login">
      <div className="sub-containerheading">
        {/*  Text component for the heading */}
        <Text type="h2" className="sub-containerheadingtext">
          Login using platforms
        </Text>
      </div>

      <div className="subcontainer-text">
        {/*  Text component for the paragraph */}
        <Text type="h3" className="text">
          Use an already existing account
        </Text>
      </div>

      <div className="socialsignup-buttoncontainer">
        <button
          className="social-button"
          onClick={() => handleLogin(googleProvider)}
        >
          <FontAwesomeIcon className="social-icongoogle" icon={faGoogle} />
          <div className="social-text">
            {/*  Text component for the social media name */}
            <Text type="span">Google</Text>
          </div>
        </button>

        <button
          className="social-button"
          onClick={() => handleLogin(facebookProvider)}
        >
          <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          <div className="social-text">
            {/*  Text component for the social media name */}
            <Text type="span">Facebook</Text>
          </div>
        </button>

      {/*   <button
          className="social-button"
          onClick={() => handleLogin(microsoftProvider)}
        >
          <FontAwesomeIcon className="social-icon" icon={faMicrosoft} />
          <div className="social-text">
            {/* Text component for the social media name *}
            <Text type="span">Microsoft</Text>
          </div>
        </button>

        <button
          className="social-button"
          onClick={() => handleLogin(linkedinProvider)}
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          <div className="social-text">
            {/*  Text component for the social media name *}
            <Text type="span">LinkedIn</Text>
          </div>
        </button>*/}
      </div> 

      <div className="policy-textcontainer social-policytext">
        {/* Text component for the paragraph and links */}
        <Text type="p" className="policy-text">
  When signing in you accept our{" "}
  <span className="legal-info">terms and conditions</span>. Learn how we use your data in our{" "}
  <span className="legal-info">privacy policy</span> and{" "}
  <span className="legal-info">cookie policy</span>.
</Text>

      </div>
    </div>
  );
};

export default SocialLogin;
