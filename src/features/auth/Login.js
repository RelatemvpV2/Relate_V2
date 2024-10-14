import React, { useState } from "react";
import '../userInvite/InviteCreateUser';

//firebase
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

//navigation
import { useNavigate } from "react-router-dom";

//components
import RelateLogo from "../../components/relatelogo/Relatelogo";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/Button";
import MainContainer from "../../components/maincontainer/Maincontainer";
import Text from "../../components/text/Text";
import GreyBackground from "../../components/greybackground/Greybackground";
import InputComponent from "../../components/inputs/InputComponent";
import { loginUser, forgotPassword } from "./authServices";
import EmailSignup from "./EmailSignup";
import SocialLogin from "./SocialLogin";

// Loader component
import Loader from "../../components/loader/Loader"; 
 
//css
import "./login.css";
import './../../App.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     /*  // Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in through Firebase");
 */
      // GraphQL Login
      const response = await loginUser(email, password); // Call the GraphQL login service
    /*   console.log("GraphQL response:", response); */ // Log GraphQL response for debugging

      if (response.success) {
        // If GraphQL login is successful, store the token
        localStorage.setItem("token", response.token);
       /*  console.log("Token stored in localStorage:", response.token); */ // Log the token to confirm it's stored
        
        // Navigate after successful login
        navigate("/startQuestionare/StartQuesPage");
      } else {
        setError("Login failed. Please try again.");
       /*  console.log("GraphQL login failed."); */
      }

    } catch (error) {
      if (error.code) /* {
        // Firebase specific error handling
        setError(error.message); // Firebase login error
        console.log("Firebase login error:", error.message); // Log Firebase error
      } else */ {
        // GraphQL error handling
        setError("Failed to login user with GraphQL: " + error.message);
       /*  console.log("GraphQL login error:", error.message);  */// Log GraphQL error
      }
    }
  };


  const handleResetPwd = (email) => {
console.log(email)
  }

  const handleForgotPwd = async () => {

    navigate('/forgot-password');

   /*  const email = await reqForEmail();
    try {
      
      const response = await forgotPassword(email); // Call the GraphQL forgot password service
      console.log("GraphQL response:", response); // Log GraphQL response for debugging

      if (response.success) {
        console.log("Password reset token sent to your email");
        setMsg("Password reset token sent to your email") 
      }
      else {
        console.log("User not found");
        setError("User not found")
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } */
  }




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
      <GreyBackground>
        <Navbar />
        <RelateLogo className="relate-logo-large" />
        {loading && <Loader />}

        <div className="login-container">
          {/* Show Loader when loading is true */}
          
          
          {/* Apply blur effect when loading */}
          <div className={loading ? "blurred-content" : ""}>
            <div className="heading-container">
              <Text type="h3" className="heading-text">
                I have an account
              </Text>
            </div>

            <div className="logininputs-container">
              <form onSubmit={handleLogin}>  {/* Changed from onClick to onSubmit */}
                <InputComponent
                  className="logininput-box"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <InputComponent
                  className="logininput-box"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
               

                <div className="loginpage-buttoncontainer">
                  <Button className="loginpage-button" type="submit">
                    Login
                  </Button>
                </div>
                {/* Display error message */}
                {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>}
              </form>
              </div>

            <div className="links-textcontainer" onClick={handleForgotPwd}>
              {/*  Text component for the link */}
              <Text type="a" href="/forgot-password" className="links-text">
                I forgot my password
              </Text>
            </div>
          </div>
        </div>
      </GreyBackground>
      

      <div className={loading ? "sub-container blurred-content" : "sub-container"}>
        <div className="left-container">
          <EmailSignup setLoading={setLoading}  />
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
