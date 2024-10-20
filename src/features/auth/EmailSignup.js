// src/components/EmailSignup.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerUser from "../../utils/userApi";
//firebase
/* import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"; */
//components
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import InputComponent from "../../components/inputs/InputComponent";

//css
import "./login.css";



const EmailSignup = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("")

  const validatePassword = (password) => {
    const validationErrors = {};

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      validationErrors.uppercase = 'Password must contain at least one uppercase letter.';
    }

    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      validationErrors.lowercase = 'Password must contain at least one lowercase letter.';
    }

    // At least one number
    if (!/[0-9]/.test(password)) {
      validationErrors.number = 'Password must contain at least one number.';
    }

    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      validationErrors.specialChar = 'Password must contain at least one special character.';
    }

    // Minimum 8 characters
    if (password.length < 8) {
      validationErrors.length = 'Password must be at least 8 characters long.';
    }

    return validationErrors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password on change
    setErrors(validatePassword(newPassword));
  };

  const handlePassword = (e) => {
    e.preventDefault();

    const validationErrors = validatePassword(password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Password is valid!');
    } else {
      alert('Password is invalid!');
    }
  };


  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);

    try {
      const response = await registerUser(email, password); // Call the API function
      console.log('User registered successfully:', response);
      setMsg("User registered successfully!"); // Set success message
      navigate('/userInvite/InviteCreateUser'); // Redirect to a success page or dashboard
      // Firebase signup logic here
       
      // Handle successful signup (e.g., redirect, store token, etc.) 
      
    } catch (error) {
      setError("Failed to sign up: " + error.message);
    } finally {
      setLoading(false); // Stop loader
    }
};



  useEffect(() => {

  }, [error, msg])



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
            className="inputboxes indent"
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
            className="inputboxes indent"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <Text type="label" htmlFor="confirmPassword" className="labels">
            Confirm password
          </Text>
          <InputComponent
            id="confirmPassword"
            className="inputboxes indent"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {msg && <Text style={{ color: "green" }}>{msg}</Text>}
          {/* Display error message */}
          {error && <Text style={{ color: "red" }}>{error}</Text>}

          <ul style={{ color: 'red' }}>
            {errors.uppercase && <li>{errors.uppercase}</li>}
            {errors.lowercase && <li>{errors.lowercase}</li>}
            {errors.number && <li>{errors.number}</li>}
            {errors.specialChar && <li>{errors.specialChar}</li>}
            {errors.length && <li>{errors.length}</li>}
          </ul>
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

      <div className="loginpage-buttoncontainer create-user">

        <Button className="loginpage-button" type="submit" onClick={handleSignup}>
          Create user
        </Button>
      </div>
    </div>
  );
};

export default EmailSignup;
