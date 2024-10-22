import React, { useState } from 'react'
import { useParams,useNavigate } from "react-router-dom";

//js 
import {ResetPasswordAPIFunc} from '../../utils/userApi'
//components
import MainContainer from '../maincontainer/Maincontainer'
import GreyBackground from '../greybackground/Greybackground'
import Navbar from '../Navbar/Navbar'
import RelateLogo from '../relatelogo/Relatelogo'
import Text from '../text/Text'
import Button from '../button/Button'
import Loader from '../loader/Loader'
import InputComponent from '../inputs/InputComponent'


const ResetPassword = () => {

  const [newPassword, setNewPassword] = useState()
  const [newConfirmPassword, setNewConfirmPassword] = useState()
  const [msg,setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  
  let { token } = useParams()
  const navigate = useNavigate()



  const handleSubmitNewPassword = async (e) => {

    if (newPassword !== newConfirmPassword) {
      console.log("password do not match")
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await ResetPasswordAPIFunc(newPassword,token); // Call the API function
      console.log('reset password', response);
      setMsg(response.data.message); // Set success message
      navigate('/Login');

    } catch (error) {
      setError("Failed to reset your password: " + error);
      navigate('/forgot-password');
      setError(error)
    } finally {
      setLoading(false); // Stop loader
    } 
  }

  return (
    <MainContainer style={{ height: "100vh", position: "relative" }}>
      <GreyBackground style={{ position: 'fixed', top: 0 }}>
        <Navbar />
        <RelateLogo className="relate-logo-large" />
        {loading && <Loader />}

        <div className="login-container">
          {/* Show Loader when loading is true */}


          {/* Apply blur effect when loading */}
          <div className={loading ? "blurred-content" : ""}>
            <div className="heading-container">
              <Text type="h3" className="heading-text">
                Create new password
              </Text>
            </div>

            <div className="logininputs-container">
              <form onSubmit={handleSubmitNewPassword}>  {/* Changed from onClick to onSubmit */}
                <InputComponent
                  className="logininput-box"
                  type="password"
                  placeholder="New password (Must be 8 digits)"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <InputComponent
                  className="logininput-box"
                  type="password"
                  placeholder="Confirm new password"
                  value={newConfirmPassword}
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                  required
                />

                <div className="loginpage-buttoncontainer" style={{ margin: "0 auto 100px" }}>
                  <Button className="loginpage-button" type="submit">
                    Save and Login
                  </Button>
                </div>
                {/* Display error message */}
                {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>}
              </form>


            </div>
          </div>
        </div>
      </GreyBackground>
    </MainContainer>
  );
}

export default ResetPassword