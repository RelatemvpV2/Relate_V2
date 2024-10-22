import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Text from '../text/Text'
import GreyBackground from '../greybackground/Greybackground'
import MainContainer from '../maincontainer/Maincontainer'
import InputComponent from '../inputs/InputComponent'
import Button from '../button/Button'
import RelateLogo from '../relatelogo/Relatelogo'

import './forgotPassword.css'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'



const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [isEmailSent, setIsEmailSent] = useState(false)
    const [touched, setTouched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched(true);
        if (email) {
            // Perform the email sending logic here
            setIsEmailSent(true);
        }
    }
    const handleInputChange = (e) => {
        setEmail(e.target.value);
        setTouched(true); // Mark as touched when typing
    };


    return (
        <MainContainer style={{ height: "100vh", position: "relative" }}>
            <GreyBackground style={{ position: 'fixed', top: 0 }}>
                <Navbar />
                <RelateLogo className="relate-logo-large" />
                {
                    isEmailSent ?
                        (<div className='resetEmailSentMsg'>
                            <Text type='h2'>An email has been sent to</Text>
                            <Text type='h3'>{email}</Text>

                            <div>
                                <span className='check-email'>
                                    Please check your inbox and/or spam filter
                                </span>
                            </div>


                        </div>)




                        /* on forgot password, requesting through email id */
                        : (

                            <div className="login-container" style={{ margin: "50px auto" }}>
                                <div className={loading ? "blurred-content" : ""}>

                                    <div className="heading-container">
                                        <Text type="h3" className="heading-text">
                                            I have an account
                                        </Text>
                                    </div>
                                </div>
                                <div className="logininputs-container">
                                    <form onSubmit={handleSubmit}>  {/* Changed from onClick to onSubmit */}
                                        <InputComponent
                                            className={`logininput-box ${touched && !email ? 'input-error' : ''}`}
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                        <p className='resetPwd-text'>We will send an email to help you reset your password</p>


                                        <div className="loginpage-buttoncontainer">
                                            <Button className="loginpage-button" type="submit">
                                                Send
                                            </Button>
                                        </div>
                                        {/* Display error message */}
                                        {error && <Text style={{ color: "red", marginBottom: 0 }}>{error}</Text>}
                                    </form>

                                </div>
                            </div>)



                }


            </GreyBackground>
        </MainContainer>

    )
}

export default ForgotPassword